
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
    window.alert("Welcome to Robot Gladiators!");
    while (enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");

        if (promptFight === "fight" || promptFight === "FIGHT") {

            //Subtract the value of playerAttack from the value of enemyHealth, and use that result to update the value in the enemyHealth variable.

            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message to the console to confirm that it worked.

            console.log(playerName + " attacked " + enemyName + ". " + enemyName + "'s health has been reduced to " + enemyHealth);

            //Subtract the value of enemyAttack from the value of playerHealth, and use that result to update the value in the playerHealth variable.

            playerHealth = playerHealth - enemyAttack;

            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //Log a resulting message to the console to confirm that it worked.

            console.log(enemyName + " attacked " + playerName + ". " + playerName + "'s health has been reduced to " + playerHealth);

            // Check enemy health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");

            }
        }

        else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            var skipBattle = window.confirm("Do you really want to skip this round?");
            if (skipBattle) {
                window.alert(playerName + " elects to skip this battle.");
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }

        }

        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}