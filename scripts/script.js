let choiceBox = document.querySelector("#choice-box");

let playerScore = 0;
let computerScore = 0;

choiceBox.addEventListener("click", (e) => {
  let choice = e.target.id;

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

function playRound(humanChoice, computerChoice) {
  let humanChoiceF = humanChoice[0].toUpperCase() + humanChoice.slice(1);
  let computerChoiceF =
    computerChoice[0].toUpperCase() + computerChoice.slice(1);

  let humanChoiceID = humanChoice[0].charCodeAt(0);
  let computerChoiceID = computerChoice[0].charCodeAt(0);

  if (Math.abs(humanChoiceID - computerChoiceID) == 3) {
    if (humanChoiceID > computerChoiceID) {
      console.log(`You Win! ${humanChoiceF} beats ${computerChoiceF}!`);
      humanScore++;
    } else {
      console.log(`You Lose! ${computerChoiceF} beats ${humanChoiceF}!`);
      computerScore++;
    }
  } else if (humanChoice < computerChoice) {
    console.log(`You Win! ${humanChoiceF} beats ${computerChoiceF}!`);
    humanScore++;
  } else if (humanChoice > computerChoice) {
    console.log(`You Lose! ${computerChoiceF} beats ${humanChoiceF}!`);
    computerScore++;
  } else {
    console.log(`You Tied! ${humanChoiceF} is the same as ${computerChoiceF}!`);
  }
}
