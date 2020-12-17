

    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
// You can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots.
//      * fight all enemy-robots.
//      * Defeat each enemy-robot.
// "LOSE" - Player robot's health is zero or less.

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            var skipBattle = window.confirm("Does " + playerName + " really want to skip this round?");
            if (skipBattle) {
                window.alert(playerName + " elects to skip this battle.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            else {
                fight();
            }

        }
        //Subtract the value of playerAttack from the value of enemyHealth, and use that result to update the value in the enemyHealth variable.
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console to confirm that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + "'s health has been reduced to " + enemyHealth);
        //Subtract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable.
        playerHealth = playerHealth - enemyAttack;
        // Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Log a resulting message to the console to confirm that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + "'s health has been reduced to " + playerHealth);
        // Check enemy health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");

        }
    }

};

var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost you robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function () {
    window.alert("the game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you survived! Your score is " + playerMoney + ".");
    }
    else {
        window.alert("You lost your robot in battle");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

startGame();

