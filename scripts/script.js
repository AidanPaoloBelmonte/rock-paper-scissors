let choiceBox = document.querySelector("#choice-box");
let roundCounter = document.querySelector("#round");
let result = document.querySelector("#result");
let playerScoreText = document.querySelector("#player-score");
let computerScoreText = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let isGameOver = false;

choiceBox.addEventListener("click", (e) => {
  let choice = e.target.id;

  round.textContent = `${currentRound}`;
  playRound(choice, getComputerChoice());
});

function getComputerChoice() {
  switch (Math.trunc((Math.random() * 100) / 33)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
    default:
      return "scissors";
  }
}

function updateResult(text, noGameResult = false) {
  if (playerScore >= 5 && !noGameResult) {
    result.textContent = text + ` You Won the Game! Congratulations!`;
    isGameOver = true;
  } else if (computerScore >= 5 && !noGameResult) {
    result.textContent = text + ` You Lost the Game! Try again next time!`;
    isGameOver = true;
  } else {
    result.textContent = text;
  }
}

function updateScores(score) {
  switch (score) {
    case 1:
      playerScore++;
      playerScoreText.textContent = playerScore;
      break;
    case -1:
      computerScore++;
      computerScoreText.textContent = computerScore;
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  if (isGameOver) {
    updateResult("The Game is over! Refresh the page to play again!", true);
    return;
  }

  let playerChoiceF = playerChoice[0].toUpperCase() + playerChoice.slice(1);
  let computerChoiceF =
    computerChoice[0].toUpperCase() + computerChoice.slice(1);

  let playerChoiceID = playerChoice[0].charCodeAt(0);
  let computerChoiceID = computerChoice[0].charCodeAt(0);

  if (Math.abs(playerChoiceID - computerChoiceID) == 3) {
    if (playerChoiceID > computerChoiceID) {
      updateScores(1);
      updateResult(`You Win! ${playerChoiceF} beats ${computerChoiceF}!`);
    } else {
      updateScores(-1);
      updateResult(`You Lose! ${computerChoiceF} beats ${playerChoiceF}!`);
    }
  } else if (playerChoice < computerChoice) {
    updateScores(1);
    updateResult(`You Win! ${playerChoiceF} beats ${computerChoiceF}!`);
  } else if (playerChoice > computerChoice) {
    updateScores(-1);
    updateResult(`You Lose! ${computerChoiceF} beats ${playerChoiceF}!`);
  } else {
    updateScores(0);
    updateResult(
      `You Tied! ${playerChoiceF} is the same as ${computerChoiceF}!`,
    );
  }

  if (!isGameOver) {
    currentRound++;
  }
}
