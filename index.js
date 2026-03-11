// let rock = 0;
// let paper = 1;
// let scissors = 2;
let computerChoice = Math.floor(Math.random() * 3);
switch (computerChoice) {
  case 0:
    computerChoice = "rock";
    break;

  case 1:
    computerChoice = "paper";
    break;

  case 2:
    computerChoice = "scissors";
    break;
}
console.log(computerChoice);
