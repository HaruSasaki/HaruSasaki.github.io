const buttons = document.querySelectorAll(".weapon-button");
const playerScoreDisplay = document.querySelector("#player-score");
const cpuScoreDisplay = document.querySelector("#cpu-score");
const popup = document.querySelector("#popup");
const popupMessage = document.querySelector("#popup-message");
const popupCpuSelection = document.querySelector("#popup-cpu-selection");
const popupPlayerSelection = document.querySelector(
    "#popup-player-selection"
);
const popupClose = document.querySelector("#popup-close");

let playerScore = 0;
let cpuScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

popupClose.addEventListener("click", closePopup);

function playRound(e) {
    const playerSelection = e.currentTarget.dataset.selection;
    const cpuSelection = getRandomSelection();

    alert(playerSelection + " vs " + cpuSelection);
    displayPopup(playerSelection, cpuSelection);

    if (playerSelection === cpuSelection) {
        // Tie
        popupMessage.textContent = "Seri!";
    } else if (
        (playerSelection === "rock" && cpuSelection === "scissors") ||
        (playerSelection === "paper" && cpuSelection === "rock") ||
        (playerSelection === "scissors" && cpuSelection === "paper")
    ) {
        // Player wins
        playerScore++;
        popupMessage.textContent = "Kamu menang!";
    } else {
        // CPU wins
        cpuScore++;
        popupMessage.textContent = "Kamu kalah!";
    }

    updateScoreDisplay();
    showPopup();
}

function getRandomSelection() {
    const selections = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * selections.length);
    return selections[randomIndex];
}

function updateScoreDisplay() {
    playerScoreDisplay.textContent = playerScore;
    cpuScoreDisplay.textContent = cpuScore;
}

function showPopup() {
    popup.classList.add("flex");
    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.remove("flex");
    popup.classList.add("hidden");
}

function displayPopup(playerSelection, cpuSelection) {
    popupPlayerSelection.src = `./assets/img/${playerSelection}.png`;
    popupCpuSelection.src = `./assets/img/${cpuSelection}.png`;
}