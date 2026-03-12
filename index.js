let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
function computerInput() {
  let computerInput = Math.floor(Math.random() * 3);

  switch (computerInput) {
    case 0:
      computerInput = "rock";
      break;

    case 1:
      computerInput = "paper";
      break;

    case 2:
      computerInput = "scissors";
      break;
  }
  return computerInput;
}

function getHumanChoice() {
  let humanInput = prompt("rock, paper or scissors?");
  return humanInput;
}
const humanFinalChoice = getHumanChoice();
const computerFinalChoice = computerInput();
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("DRAW!");
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("human wins");
    humanScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("machine wins");
    computerScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("human wins");
    humanScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(" machine wins");
    computerScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("machine wins");
    computerScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("human wins");
    humanChoice += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  }
}
console.log(`machine: ${computerFinalChoice}`);

console.log(`human: ${humanFinalChoice}`);

function playGame(numberOfRounds) {
  playRound(humanFinalChoice, computerFinalChoice);
  numberOfRounds += 1;
  console.log(`rounds played: ${numberOfRounds}`);
}
playGame(numberOfRounds);
