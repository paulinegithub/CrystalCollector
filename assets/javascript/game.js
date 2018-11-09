$(document).ready(function () {

    // starting placeholder variables
    var targetVal;
    var currentVal = 0;
    var wins = 0;
    var losses = 0;
    var crystalVal = "";

    // function to give target value (random number between 19 - 120)
    function randomTargetVal() {
        targetVal = Math.floor(Math.random() * 102) + 19;
    }

    // function to update screen
    function score() {
        $("#target").html("<b>Target Number: <span class='val'>" + targetVal + "</span></b>"); // show target value
        // $("#last-clicked").html("<b>Value of last crystal clicked: <span class='val'>" + crystalVal + "</span></b>"); // show value of last crystal clicked
        $("#current").html("<b>Current Total: <span class='val'>" + currentVal + "</span></b>"); // show current total
        $("#wins").html("<b>Wins: </b>" + wins); // show wins
        $("#losses").html("<b>Losses: </b>" + losses); // show losses
    }

    // function to reset round
    function reset() {
        randomTargetVal(); // get new target number
        currentVal = 0; // clear currentVal
        crystalVal = ""; // clear crystalVal
        score(); // show score

        // assign a set random value (between 1 - 12) to each crystal during the game
        $("#red").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#blue").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#yellow").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#green").attr("value", Math.floor(Math.random() * 12) + 1);
        console.log("red: " + $("#red").attr("value"));
        console.log("blue: " + $("#blue").attr("value"));
        console.log("yellow: " + $("#yellow").attr("value"));
        console.log("green: " + $("#green").attr("value"));
    }

    var audio = document.createElement("audio");
        audio.src="https://kahimyang.com/resources/sound/click.mp3";
        audio.volume=0.10;
        audio.autoPlay=false;
        audio.preLoad=true;  

    // do this whenever the user clicks on a crystal 
    $(".crystal").click(function () {

        audio.play(); // play sound

        // get value at the crystal clicked
        crystalVal = $(this).attr("value");
        console.log("crystalVal: " + crystalVal);

        // add crystalVal to currentVal
        currentVal += parseInt(crystalVal);
        console.log("currentVal: " + currentVal);

        // win: when currentVal === targetVal
        if (currentVal === targetVal) {
            wins++; // increment wins
            console.log("wins: " + wins);
            alert("Hooray, you got it!");
            reset(); // play again after user clicks on alert
        }

        // lose: when currentVal > targetVal
        else if (currentVal > targetVal) {
            losses++; // increment losses
            console.log("losses: " + losses);
            alert("Sorry :( Try to get the next number.");
            reset(); // play again after user clicks on alert
        }

        // update score between clicks when game is still active
        score();
    });

    // run initial game
    reset();
});