//Variables
let pattern = [];
let myButtons = [];
let count = 0;
let simonMessage = document.querySelector(".message");
let resetButton = document.querySelector(".resetButton");
let start = document.querySelector(".startButton");
let buttons = document.getElementsByClassName("button");
let buttonOne = document.querySelector(".red");
let buttonTwo = document.querySelector(".yellow");
let buttonThree = document.querySelector(".orange");
let buttonFour = document.querySelector(".blue");
let buttonFive = document.querySelector(".green");
//these scores are only for the innerHTML
let myScore = document.querySelector(".gameScore");
let high_score = document.querySelector(".highScore");
//these are variables to help change the innerHTML of the above scores
let highScore = 0;
let gameScore = 0;
start.disabled = false;
buttonOne.disabled = false;
buttonTwo.disabled = false;
buttonThree.disabled = false;
buttonFour.disabled = false;
buttonFive.disabled = false;

start.addEventListener("click", function() {
    reset();
    newSimon();
}, false)


//checkPatternLength();
//button event listeners to compare buttons being pressed to the button

buttonOne.addEventListener("click", myButtonsSequence);
buttonTwo.addEventListener("click", myButtonsSequence);
buttonThree.addEventListener("click", myButtonsSequence);
buttonFour.addEventListener("click", myButtonsSequence);
buttonFive.addEventListener("click", myButtonsSequence);
resetButton.addEventListener("click", reset, false);


document.body.addEventListener("click", function(event) {
    let clicked = event.target.className;
    let buttonsArr = ["button red", "button yellow", "button orange", "button blue", "button green"];
    if (buttonsArr.indexOf(clicked) > -1) {
        console.log("highscore", highScore)
        checksPattern();

    }

})

function reset() {
    pattern = [];
    myButtons = [];
    gameScore = 0;
    myScore.innerHTML = `Your score : ${gameScore}`;
    console.log(pattern)
}

function newSimon() {
    addButtonToSequence();
    patternSequence();
}

function generateButton() {
    let randomButton = buttons[Math.floor(Math.random() * 5)];
    pattern.push(randomButton.className);
    //console.log(pattern);
}

function addButtonToSequence() {
    //myScore.innerHTML = `Your score : ${gameScore}`;
    generateButton();
}
//push the buttons that i have pressed into the array holding my presses
function myButtonsSequence(event) {
    myButtons.push(event.target.className);
    count++;

}

//the sequence that will start off the game
function patternSequence() {
    // console.log(pattern);
    let i = 0;
    let sequence = setInterval(function() {
        animateButton(pattern[i]);
        disableBoard();
        i++;
        if (i >= pattern.length) {
            enableBoard();
            clearInterval(sequence);
        }
    }, 1000)
}


//check my pattern against the random simon pattern

function checksPattern() {
    if (myButtons[myButtons.length - 1] === pattern[myButtons.length - 1]) {
        if (pattern.length === myButtons.length) {
            gameScore++;
            myScore.innerHTML = `Your score : ${gameScore}`;
            newSimon();
            myButtons = [];
            if (pattern.length === 20) {
                checkScore();
                checkScoreStorage();
                simonMessage.innerHTML = "You Won!";
            }
        }

    } else {

        checkScore();
        checkScoreStorage();
        simonMessage.innerHTML = "You Lose!";
        reset();
    }

}

function checkScore() {
    if (gameScore >= highScore) {
        highScore = gameScore;
        high_score.innerHTML = `High Score : ${highScore}`;
    }
}
//checking the score and storing it away into local storage
//need to fix this function
function checkScoreStorage() {
    high_score = localStorage.getItem("high_score");
    if (high_score !== "null") {
        if (gameScore > high_score) {

            high_score = parseInt(gameScore);
            localStorage.setItem("high_score", high_score);
        }
    } else if (high_score === "null") {
        console.log("what is storage")
        high_score = parseInt(gameScore);
        localStorage.setItem("high_score", high_score);
    }

    return high_score;
}

//lights up the buttons when they are pushed
function animateButton(button) {
    let buttonClass = button.slice(7);
    if (buttonClass === "red") {
        buttonOne.classList.replace("red", "redLightUp");
    } else if (buttonClass === "yellow") {
        buttonTwo.classList.replace("yellow", "yellowLightUp", );
    } else if (buttonClass === "orange") {
        buttonThree.classList.replace("orange", "orangeLightUp");
    } else if (buttonClass === "blue") {
        buttonFour.classList.replace("blue", "blueLightUp");
    } else {
        buttonFive.classList.replace("green", "greenLightUp");
    }
    let lightOff = setTimeout(function() {
        if (buttonClass === "red") {
            buttonOne.classList.replace("redLightUp", "red");
        } else if (buttonClass === "yellow") {
            buttonTwo.classList.replace("yellowLightUp", "yellow");
        } else if (buttonClass === "orange") {
            buttonThree.classList.replace("orangeLightUp", "orange");
        } else if (buttonClass === "blue") {
            buttonFour.classList.replace("blueLightUp", "blue");
        } else {
            buttonFive.classList.replace("greenLightUp", "green");
        }
    }, 400)
}

//disables the game board
function disableBoard() {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
}
//enable the board
function enableBoard() {
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    buttonFour.disabled = false;
    buttonFive.disabled = false;
}