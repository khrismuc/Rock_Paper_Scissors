let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const smallUserWord = "user".fontcolor("red").fontsize(3).sub();
const smallCompWord = "comp".fontcolor("blue").fontsize(3).sub();

var userChoice, computerChoice;

const choices = ['r', 'p', 's'];
const makeComputerChoice = () => {
    //the choices for rock paper scissors
    //create the random number
    computerChoice = choices[Math.floor(Math.random() * 3)];
}

const words = ["Rock", "Paper", "Scissors"];
function convertToWord(letter) {
    return words[choices.indexOf(letter)];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win!`;
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You lose!`;
}

function draw() {
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} It's a draw!`;
}

function game(uc) {
    userChoice = uc;
    makeComputerChoice();
    const game = userChoice + computerChoice;

    if ("rspr".indexOf(game) > -1) win();
    else if ("rpsr".indexOf(game) > -1) lose();
    else draw();

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function pick() {
    game(this.id);
}

function main() {
    document.getElementById("r").addEventListener('click', pick);
    document.getElementById("p").addEventListener('click', pick);
    document.getElementById("s").addEventListener('click', pick);
}

main();