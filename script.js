let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function(){
    let Output = Math.floor(Math.random()*3);
    if (Output == 0) return "Scissors";
    if (Output == 1) return "Paper";
    if (Output == 2) return "Rock";
};

const playRound = function(p, c){
    if (p === c){
        return;
    }
    else if(p==='Rock' && c==='Scissors'){
        humanScore++;
    }
    else if(p==='Paper' && c==='Rock'){
        humanScore++;
    }
    else if(p==='Scissors' && c==='Paper'){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

const displayChoices = function(str){
    const container = document.querySelector(".bottomText");

    let p = container.querySelector("p");
    if (p) container.removeChild(p);

    let c = getComputerChoice();
    const content = document.createElement("p");
    content.textContent = "You chose "+str+" and Computer chose "+c+".";
    container.appendChild(content);
    return c;
}

const displayScore = function(){
    const container = document.querySelector(".bottomText2");
    let h = container.querySelector("h2");
    if (h) container.removeChild(h);

    const content = document.createElement("h2");
    content.textContent = `YOUR SCORE: ${humanScore}, COMPUTER SCORE: ${computerScore}`;
    container.appendChild(content);
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const container = document.querySelector(".bottomText2");

        const message = document.createElement("div");
        message.textContent = humanScore === 5 ? "YOU WON!!" : "YOU LOST!!";
        message.style.cssText = "font-size: 25px; font-weight: bold; margin-top: 10px;";
        container.appendChild(message);

        // Change background color
        document.body.style.backgroundColor = humanScore === 5 ? "lightgreen" : "lightcoral";

        // Disable buttons
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);

        // Create "Play Again" button
        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.style.cssText = "margin-top: 20px; font-size: 16px; padding: 10px;";
        playAgainBtn.addEventListener("click", () => location.reload());
        container.appendChild(playAgainBtn);
    }
}


const btn1 = document.querySelector("#rockClick");
btn1.addEventListener("click", function(){
    playRound("Rock",displayChoices("Rock"));
    displayScore();
    checkWinner()
});

const btn2 = document.querySelector("#paperClick");
btn2.addEventListener("click", function(){
    playRound("Paper", displayChoices("Paper"));
    displayScore();
    checkWinner()
});

const btn3 = document.querySelector("#scissorsClick");
btn3.addEventListener("click", function(){
    playRound("Scissors",displayChoices("Scissors"));
    displayScore();
    checkWinner()
});


/*let getHumanChoice = function(){
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
}*/