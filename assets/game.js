// assign target number random

// assign a random value to each crytal 1-12

//use an onClick when user clicks each crystal

//add the value of each click to the total score

// if the totalScore equals randomNumber, user wins, and win is recorded

// if totalScore is more than randomNumber, user loses, and loss is recorded

// if win or loss, game resets and new numbers are assigned

// assign variables
$(document).ready(function() {

var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var userTotal;
var wins = 0;
var losses = 0;


// reset function

function reset (){
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
    
}

}