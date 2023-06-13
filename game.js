var wins=0
var losses=0
var ties= 0
var choices= ["R","P","S"]
var humanChoice= prompt("Choose R, P, or S")
var randomNum= Math.floor(Math.random()*3) //rounds number down, math.random*3 gives us the number, Math.floor rounds down

//players choose RPS
console.log(humanChoice)
//cpu randomly chooses option (r,p,s)
console.log(choices[randomNum])
    
//compare the choices
 //if humanChoice is s and cpuChoice is p
 //if humanChoice is p and cpuChoice is r
 //if humanChoice is r and cpuChoice is s
//we win
//window.alert that we won
//increase numWins by 1

//if humanChoice === cpuChoice
//tie
 //window.alert that we tied
 //increase numTies by 1

//else
//lose
 //window.alert that we lost
 //increases numLosses by 1

//ask user "Do you want to play again?"
 //if yes, restart game
 //if no, exit game