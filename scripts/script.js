function getComputerChoice() {
  switch (Math.trunc((Math.random() * 100) / 33)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
    default:
      return "Scissors";
  }
}
