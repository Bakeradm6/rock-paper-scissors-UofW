var wins=0
var losses=0
var ties= 0
var choices= ["R","P","S"]
var humanChoice= prompt("Choose R, P, or S")
var randomNum= Math.floor(Math.random()*3) //rounds number down, math.random*3 gives us the number, Math.floor rounds down
var cpuChoice = choices[randomNum]  //makes cpu choose 0, 1 or 2 randomly, which corresponds to an item in the array "choices"

//players choose RPS
console.log(humanChoice)
//cpu randomly chooses option (r,p,s)
console.log(choices[randomNum])
    
//compare the choices
if (
 humanChoice === "S" && cpuChoice === "P" ||
 humanChoice === "R" && cpuChoice === "S" ||
 humanChoice === "P" && cpuChoice === "R"
) { 
 alert("You won!")  //displays You won!
 wins++ //adds 1 to var wins
} else if (humanChoice === cpuChoice){
 alert("You tied")
 ties++
} else {
 alert("You lost...")
 losses++
}

alert("Wins: "+wins+
 "\nTies: "+ties+
"\nLosses: "+losses)

//ask user "Do you want to play again?"
 //if yes, restart game
 //if no, exit game