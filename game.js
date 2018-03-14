// present a random series of up to 20 button presses;
//add an event listener to the start button that waits until the button is clicked
//There is a function inside the event listener
//this function starts the Simon_Game
//it lights up one button and waits for the user to click the button
//if the user clicks the correct button it remembers the previous button click and replays that along with a new random button
//all of the buttons have event listeners
//attach a sound to each button both when the button is demonstrated to the user and when the user clicks the button
//if wrong button is pressed the user is notified and the series of buttons is shown again to remind the user of the pattern
//sequence steps
//1. add a random number to the sequence
//2. animate the sequence to the user
//3. enable user interaction with the board and register and clicks on the buttons
//4. while the player has not entered an incorrect response and the number of clicks is less than the length of the sequence, wait for player's input
//5. continue adding input rounds until the player loses
//show user a button if the user matches the button with a click then the series is shown with an additional button
//if wrong, game over
//IIFE
// (function(){
//   let startGame = function () {
//
//   }
// })();



//wait for user to match the button
// newButton.addEventListener("click", function (){
//continue onwards
//if the button is pushed then it will be added to the pattern array and the score will be increased
//   pattern.push(newButton);
//   score++;
// })
//make a button listener which checks using the checksPattern function the pattern against myButtons
//should also reset
//loop through myButton array
// make a display error function
// make a function that resets the game

//using setIntervals with clearIntervals
//create a disable board function
//Variables
let pattern = [];
let myButtons = [];
let simonButton;
let start = document.querySelector(".startButton");
let buttons = document.getElementsByClassName("button");
let buttonOne = document.querySelector(".melon");
let buttonTwo = document.querySelector(".champagne");
let buttonThree = document.querySelector(".tuscany");
let buttonFour = document.querySelector(".trolley");
let buttonFive = document.querySelector(".davys");
let score = document.querySelector(".score");
let highScore;
let gameScore = 0;
start.disabled = false;
buttonOne.disabled = false;
buttonTwo.disabled = false;
buttonThree.disabled = false;
buttonFour.disabled = false;
buttonFive.disabled = false;


document.addEventListener("DOMContentLoaded", function() {

    //button event listeners to compare buttons being pressed to the button
    buttonOne.addEventListener("click", myButtonsSequence);
    buttonTwo.addEventListener("click", myButtonsSequence);
    buttonThree.addEventListener("click", myButtonsSequence);
    buttonFour.addEventListener("click", myButtonsSequence);
    buttonFive.addEventListener("click", myButtonsSequence);

    start.addEventListener("click", function() {
        score.innerHTML = `Your score : ${++gameScore}`;
        patternSequence();
        animateButton(pattern[0]);
        console.log(pattern[0])
    })


    function generateButton() {
        let randomButton = buttons[Math.floor(Math.random() * 5)];
        pattern.push(randomButton);
    }

    //the sequence that will start off the game
    function patternSequence() {
        generateButton();
        console.log(pattern);
        let i = 0;
    }
    //push the buttons that i have pressed into the array holding my presses
    function myButtonsSequence(event) {
        myButtons.push(event.target);
        //animateButton(event.target)
        // may not even need the animateButton
        console.log(myButtons)
        //checksPattern();
    }

    //check my pattern against the random simon pattern
    function checksPattern(pattern, myButtons) {
        for (let i = 0; i < simonArr.length; i++) {
            if(pattern.length === myButtons.length) {
              if(pattern[i] === myButtons[i]) {
                if(pattern.length === 20) {
                  alert("Awesome Game!");

                  //newsimongame function
                }
              }
            }
        }
    }
    //checking the score and storing it away into local storage
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
      console.log(buttonClass)
      if(buttonClass === "melon"){
        buttonOne.classList.replace("melon", "melonLightUp");
      } else if(buttonClass === "champagne"){
        buttonTwo.classList.replace("champagne", "champagneLightUp");
      } else if (buttonClass === "tuscany"){
        buttonThree.classList.replace("tuscany", "tuscanyLightUp");
      } else if (buttonClass === "trolley"){
        buttonFour.classList.replace("trolley", "trolleyLightUp");
      } else {
        buttonFive.classList.replace("davys", "davysLightUp");
      }
      let lightOff = setTimeout (function (){
          if(buttonClass === "melon"){
            buttonOne.classList.replace("melonLightUp", "melon");
          } else if (buttonClass === "champagne"){
            buttonTwo.classList.replace("champagneLightUp", "champagne");
          } else if (buttonClass === "tuscany"){
            buttonThree.classList.replace("tuscanyLightUp", "tuscany");
          } else if (buttonClass === "trolley") {
            buttonFour.classList.replace("trolleyLightUp", "trolley");
          }else {
            buttonFive.classList.replace("davysLightUp", "davys");
          }
      }, 500)
}

    //disables the game board
    function disableBoard() {
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
        buttonThree.disabled = true;
        buttonFour.disabled = true;
        buttonFive.disabled = true;
        start.disabled = true;
    }



})
