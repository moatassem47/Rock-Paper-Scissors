const results = document.querySelector("#results");
const choices = document.querySelector("#choices");
const winner = document.querySelector("#winner");
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
    humanScore += 1;
    console.log(`human's score = ${humanScore}`);
    console.log(`computer's score = ${computerScore}`);
  }
  results.textContent = ` human's score = ${humanScore} -------- computer's score = ${computerScore}`;
  choices.textContent = `human choice = ${humanChoice} -------- computer's choice = ${computerChoice}`;
  if (humanScore == 5) {
    winner.textContent = `winner is human`;
    return;
  }
  if (computerScore == 5) {
    winner.textContent = `winner is computer`;
    return;
  }
}

// function playGame() {
//   for (i = 0; i < 5; i++) {
//     console.log("=================================");
//     hChoice = getHumanChoice();
//     cChoice = computerInput();
//     console.log(`human choice is ${hChoice}  `);
//     console.log(`computer choice is ${cChoice}  `);
//     playRound(hChoice, cChoice);
//   }
//   if (computerScore > humanScore) {
//     console.log("COMPUTER WINS!!");
//   } else if (computerScore < humanScore) {
//     console.log("HUMAN WINS!");
//   } else {
//     console.log("IT'S A DRAW!");
//   }
// }
// playGame();
const paperBtn = document.querySelector("#paperBtn");
const rockBtn = document.querySelector("#rockBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
paperBtn.addEventListener("click", () => {
  playRound("paper", computerInput());
});
rockBtn.addEventListener("click", () => {
  playRound("rock", computerInput());
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerInput());
});
