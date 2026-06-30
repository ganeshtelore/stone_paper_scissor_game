let gameCount=1;
let userWin = 0;
let systemWin = 0;
function playGame(event) {
    event.preventDefault();
    if(gameCount>=5){
        if(userWin>systemWin) {
            document.getElementById("score").textContent = `Limit Reached! Final Winner is User with score ${userWin}`;
            resultElement.textContent = "";
        }else{
            document.getElementById("score").textContent = `Limit Reached! Final Winner is System with score ${systemWin}`;
        }
    }else{
    gameCount = gameCount+1;
    
    const userInput = document.forms["gameForm"]["user-input"].value.toLowerCase().trim();
    const resultElement = document.getElementById("result");
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    if (userInput === randomChoice) {
        resultElement.textContent = "It's a tie! Both chose " + userInput;
        document.forms["gameForm"]["user-input"].value="";
    } else if (
        (userInput === 'rock' && randomChoice === 'scissors') ||
        (userInput === 'paper' && randomChoice === 'rock') ||
        (userInput === 'scissors' && randomChoice === 'paper')
    ) {
        resultElement.textContent = "You win! " + userInput + " beats " + randomChoice;
        document.forms["gameForm"]["user-input"].value="";
        userWin+=1;
        document.getElementById("score").textContent = "Your Score: " + userWin + " System Score: " + systemWin;
    } else if (choiceArray.includes(userInput)) {
        resultElement.textContent = "You lose! " + randomChoice + " beats " + userInput;
        document.forms["gameForm"]["user-input"].value="";
        systemWin+=1;
        document.getElementById("score").textContent = "Your Score: " + userWin + " System Score: " + systemWin;
    } else {
        resultElement.textContent = "Invalid input! Please enter rock, paper, or scissors.";
        document.forms["gameForm"]["user-input"].value="";
    }
}
}