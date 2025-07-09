let rounds = 0;

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceID = humanChoice[0].charCodeAt(0);
  let computerChoiceID = humanChoice[0].charCodeAt(0);

  if (humanChoiceID - computerChoiceID == 3) {
    if (humanChoiceID < computerChoiceID) {
      console.log(`You Win! {humanChoice} beats {computerChoice}!`);
      humanScore++;
    } else {
      console.log(`You Lose! {computerChoice} beats {humanChoice}!`);
      computerScore++;
    }
  }
  if (humanChoice < computerChoice) {
    console.log(`You Win! {humanChoice} beats {computerChoice}!`);
    humanScore++;
  } else if (humanChoice > computerChoice) {
    console.log(`You Lose! {computerChoice} beats {humanChoice}!`);
    computerScore++;
  } else {
    console.log(`You Tied! {humanChoice} is the same as {computerChoice}!`);
  }
}
