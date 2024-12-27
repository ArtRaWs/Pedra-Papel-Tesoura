const choices = ["Pedra", "Papel", "Tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const settings = document.getElementById("settings");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Empate! 🤝";
    }
    else {
        switch (playerChoice) {
            case "Pedra":
                result = (computerChoice === "Tesoura") ? "Você Venceu!🎉" : "Computador venceu!😂";
                break;
            case "Papel":
                result = (computerChoice === "Pedra") ? "Você Venceu!🎉" : "Computador venceu!😂";
                break;
            case "Tesoura":
                result = (computerChoice === "Papel") ? "Você Venceu!🎉" : "Computador venceu!😂";
                break;
        }
    }
    console.log(computerChoice);
    console.log(result);

    playerDisplay.textContent = `Jogador👩🏻🧑🏻: ${playerChoice}`;
    computerDisplay.textContent = `Computador💻: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "Você Venceu!🎉":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Computador venceu!😂":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = "Jogador👩🏻🧑🏻:";
    computerDisplay.textContent = "Computador💻:";
    resultDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    playerScoreDisplay.textContent = "";

}
function DarkMode() {
    document.body.classList.toggle("dark-mode");
}

