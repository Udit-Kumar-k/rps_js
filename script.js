let humanScore = 0;
let computerScore = 0;
let getComputerChoice = function(){
    let Output = Math.floor(Math.random()*3);
    if (Output == 0) return "S";
    if (Output == 1) return "P";
    if (Output == 2) return "R";
};
let getHumanChoice = function(){
    let input = prompt("Enter R for Rock, P for Paper and S for Scissors");
    return input.toUpperCase();
};

let playRound = function(){
    let inn = getHumanChoice();
    let out = getComputerChoice();
    console.log("Your Pick: "+inn);
    console.log("Computer Pick: " +out);
    if (inn===out){
        console.log("DRAW");
        humanScore++;
        computerScore++;
    }
    else if (inn==="P" && out==="R"){
        console.log("You Won");
        humanScore++;
    }
    else if(inn ==="R" && out==="S"){
        console.log("You Won")
        humanScore++;
    }
    else if(inn==="S" && out ==="P"){
        console.log("You Won")
        humanScore++;
    }
    else{
        console.log("You Lost");
        computerScore++;
    }
    console.log("Your Score= " +humanScore);
    console.log("Computer Score= " +computerScore);
}

for(let round = 1;round<6; round++){
    console.log(`Round `+round);
    playRound();
}

console.log(" ")
console.log("-----FINAL RESULT-----")
if(humanScore==computerScore){
    console.log("IT'S A DRAW!")
}
else if(humanScore>computerScore){
    console.log("YOU WON!")
}
else{
    console.log("YOU LOST!")
}