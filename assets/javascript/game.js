// Wait for document to load before running js
$(document).ready(function () {

    // starting placeholder variables
    var targetVal;
    var currentVal = 0;
    var wins = 0;
    var losses = 0;
    var crystalVal = 0;

    // function to give target value (random number between 19 - 120)
    function randomTargetVal() {
        targetVal = Math.floor(Math.random() * 102) + 19;
    }

    // function to update screen
    function score() {
        $("#target").html("<b>Target Number: </b>" + targetVal); // show target value
        $("#current").html("<b>Current Total: </b>" + currentVal); // show current score
        $("#wins").html("<b>Wins: </b>" + wins); // show wins
        $("#losses").html("<b>Losses: </b>" + losses); // show losses
    }

    // function to give crystal value (random number between 1 - 12)
    // function randomCrystalVal() {
    //     crystalVal = Math.floor(Math.random() * 12) + 1;
    // }

    // function to reset round
    function reset() {
        randomTargetVal(); // get new target number
        currentVal = 0; // clear currentVal
        score(); // show score

        // assign randomVal to each crystal color
        $("#red").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#blue").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#yellow").attr("value", Math.floor(Math.random() * 12) + 1);
        $("#green").attr("value", Math.floor(Math.random() * 12) + 1);
        console.log("red: " + $("#red").attr("value"));
        console.log("blue: " + $("#blue").attr("value"));
        console.log("yellow: " + $("#yellow").attr("value"));
        console.log("green: " + $("#green").attr("value"));
    }


    // each crystal has 
    // click on a crystal and add it to currentVal
    // when user clicks on red crystal 
    $(".crystal").click(function () {

        // get value at crystal clicked
        crystalVal = $(this).attr("value");
        console.log("crystalVal: " + crystalVal);

        // add crystalVal currentVal
        currentVal += parseInt(crystalVal);
        console.log("currentVal: " + currentVal);

        // win: when currentVal === targetVal
        if (currentVal === targetVal) {
            wins++; // increment wins
            reset(); // play again
            console.log("wins: " + wins);
        }

        // lose: when currentVal > targetVal
        else if (currentVal > targetVal) {
            losses++; // increment losses
            reset(); // play again
            console.log("losses: " + losses);
        }

        // update score
        score();
    });

    // run initial game
    reset();

    

});