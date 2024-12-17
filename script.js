humanScore = 0;
computerScore = 0;

function getComputerChoice() {
  let op = Math.floor(Math.random() * 3);

  if (op == 0) return "Rock";
  else if (op == 1) return "Paper";
  else return "Scissors";
}

let container = document.querySelector("#container");
container.style.textAlign = "center"; 

let p = document.createElement("p");
p.textContent = "Choose your move, rock, paper or scissors?";
p.style.marginTop = "50px";
p.style.marginBottom = "30px";
p.style.fontSize = "24px";
container.appendChild(p);

let div = document.createElement("div");


function styleButton(button) {
  button.style.padding = "10px 20px";
  button.style.margin = "10px";
  button.style.fontSize = "18px";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
}

let rock = document.createElement("button");
rock.textContent = "Rock";
styleButton(rock);
div.appendChild(rock);

let paper = document.createElement("button");
paper.textContent = "Paper";
styleButton(paper);
div.appendChild(paper);

let scissors = document.createElement("button");
scissors.textContent = "Scissors";
styleButton(scissors);
div.appendChild(scissors);

container.appendChild(div);

let result = document.createElement("div");
result.style.marginTop = "20px";
result.style.fontSize = "20px";
result.style.fontWeight = "bold";
result.style.color = "black";

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice == "rock") {
    if (computerChoice == "rock")
      result.innerHTML += `<br>It's a tie! You both played Rock!`;
    else if (computerChoice == "paper") {
      result.innerHTML += `<br>You lose! Paper beats Rock!`;
      computerScore++;
    } else {
      result.innerHTML += `<br>You win! Rock beats Scissors!`;
      humanScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      result.innerHTML += `<br>You win! Paper beats Rock!`;
      humanScore++;
    } else if (computerChoice == "paper")
      result.innerHTML += `<br>It's a tie! You both played Paper!`;
    else {
      result.innerHTML += `<br>You lose! Scissors beat Paper!`;
      computerScore++;
    }
  } else {
    if (computerChoice == "rock") {
      result.innerHTML += `<br>You lose! Rock beats Scissors!`;
      computerScore++;
    } else if (computerChoice == "paper") {
      result.innerHTML += `<br>You win! Scissors beat Paper!`;
      humanScore++;
    } else result.innerHTML += `<br>It's a tie! You both played Scissors!`;
  }

  result.innerHTML += `<br>Player Score: ${humanScore}   Computer Score: ${computerScore}`;
  container.appendChild(result);
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkGameOver();
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkGameOver();
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkGameOver();
});

function checkGameOver() {
  if (humanScore == 5 || computerScore == 5) {
    playGame();
  }
}

function playGame() {
  result.innerHTML += `<br><br><span style="font-size: 22px; color: green;">Game Over!</span>`;
  if (humanScore > computerScore) {
    result.innerHTML += `<br><span style="color: blue;">You won!</span>`;
  } else if (humanScore == computerScore) {
    result.innerHTML += `<br><span style="color: orange;">It's a tie!</span>`;
  } else {
    result.innerHTML += `<br><span style="color: red;">You lose!</span>`;
  }

  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  container.appendChild(result);
}
