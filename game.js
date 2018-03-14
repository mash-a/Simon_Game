document.addEventListener("DOMContentLoaded", function() {
    //Variables
    let pattern = [];
    let myButtons = [];
    let simonMessage = document.querySelector(".message");
    let resetButton = document.querySelector(".resetButton");
    let start = document.querySelector(".startButton");
    let buttons = document.getElementsByClassName("button");
    let buttonOne = document.querySelector(".red");
    let buttonTwo = document.querySelector(".yellow");
    let buttonThree = document.querySelector(".orange");
    let buttonFour = document.querySelector(".blue");
    let buttonFive = document.querySelector(".green");
    let myScore = document.querySelector(".gameScore");
    let high_score = document.querySelector(".highScore");
    let highScore = 0;
    let gameScore = 0;
    start.disabled = false;
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    buttonFour.disabled = false;
    buttonFive.disabled = false;

    //button event listeners to compare buttons being pressed to the button
    buttonOne.addEventListener("click", myButtonsSequence);
    buttonTwo.addEventListener("click", myButtonsSequence);
    buttonThree.addEventListener("click", myButtonsSequence);
    buttonFour.addEventListener("click", myButtonsSequence);
    buttonFive.addEventListener("click", myButtonsSequence);
    resetButton.addEventListener("click", reset);


    function reset() {
        pattern = [];
        myButtons = [];
        gameScore = 0;
        myScore.innerHTML = `Your score : ${gameScore}`;
    }

    function newSimon() {
        // reset();
        //  let disabled = setTimeout(disableBoard, 1000);
        addButtonToSequence();
        patternSequence();
    }
    // function nextSimon(){
    //   for(let i = 0 ; i < pattern.length; i ++) {
    //     animate(pattern[i]);
    //   }
    //   generateButton();
    // }

    function generateButton() {
        let randomButton = buttons[Math.floor(Math.random() * 5)];
        pattern.push(randomButton);
    }

    function addButtonToSequence() {

        ++gameScore;
        myScore.innerHTML = `Your score : ${gameScore}`;
        generateButton();

    }

    //the sequence that will start off the game
    function patternSequence() {
        // generateButton();
        // console.log(pattern);
        let i = 0;
        let sequence = setInterval(function() {

            animateButton(pattern[i]);
            i++;
            if (i >= pattern.length) {

                clearInterval(sequence);
            }
        }, 500)

    }
    //push the buttons that i have pressed into the array holding my presses
    function myButtonsSequence(event) {
        myButtons.push(event.target);
        console.log(myButtons)
    }

    //check my pattern against the random simon pattern
    function checksPattern(pattern, myButtons) {
        if (pattern[pattern.length - 1] !== myButtons[myButtons.length - 1]) {
            reset();
        } else if (pattern.length === myButtons.length) {
            if (pattern.length === 20) {
                simonMessage.innerHTML = "Congrats! You Won!"
                high_score = 20;
                checkScore(myScore, high_score);
                reset();
            } else {
                //next round of buttons
                newSimon();
            }
        } else {
            reset()
        }

    }
    //checking the score and storing it away into local storage
    //need to fix this function
    function checkScore(myScore, high_score) {
        high_score = localStorage.getItem("high_score");
        if (high_score !== null) {
            if (myScore >= high_score) {
                localStorage.setItem("high_score", high_score);

            }
        } else {
            localStorage.setItem("high_score", high_score);
        }
    }

    //lights up the buttons when they are either pushed or not pushed
    function animateButton(button) {
        let buttonClass = button.classList[1];
        //console.log(buttonClass)
        if (buttonClass === "red") {
            buttonOne.classList.replace("red", "redLightUp");
        } else if (buttonClass === "yellow") {
            buttonTwo.classList.replace("yellow", "yellowLightUp");
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
        }, 300)
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

    start.addEventListener("click", function() {

        newSimon();
        console.log(pattern)

    })
    checksPattern(pattern, myButtons);

    console.log(myButtons)


})
