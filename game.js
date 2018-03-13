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
//let copyOfPattern = [];
let myButtons = [];
let simonButton;
let start = document.querySelector(".startButton");
let buttons = document.getElementsByClassName("button");
let buttonOne = document.querySelector("#button1");
let buttonTwo = document.querySelector("#button2");
let buttonThree = document.querySelector("#button3");
let buttonFour = document.querySelector("#button4");
let buttonFive = document.querySelector("#button5");
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



    start.addEventListener("click", function () {
      score.innerHTML = `Your score : ${++gameScore}`;
      patternSequence();
    })

  //button event listeners to compare buttons being pressed to the button
  buttonOne.addEventListener("click", function (){
    console.log("i am button one!")
  });
  buttonTwo.addEventListener("click", myButtonsSequence);
  buttonThree.addEventListener("click", myButtonsSequence);
  buttonFour.addEventListener("click", myButtonsSequence);
  buttonFive.addEventListener("click", myButtonsSequence);
  function generateButton () {
    let randomButton = buttons[Math.floor(Math.random() * 5)];
    pattern.push(randomButton);
  }
  //lights up the buttons when they are either pushed or not pushed
  function animateButton (elem) {
    if(elem.className === "lightUp"){
      elem.class.toggle("button")
    } else {
      elem.class.toggle("lightUp")
    };
  }
  // function start () {
  //   score.innerHTML = `Your score : ${++score}`;
  //
  // }
  //the sequence that will start off the game
  function patternSequence(){
    generateButton();
    console.log(pattern);
    let i = 0;
  }
  //push the buttons that i have pressed into the array holding my presses
  function myButtonsSequence(event){
    myButtons.push(event.target);
    checksPattern();
  }
  //check my pattern against the random simonn pattern
  function checksPattern(simonArr, myArr){
    for(let i = 0; i < myArr.length; i++){
      if(simonArr.length === myArr.length){

      }
    }
  }
  //checking the score and storing it away into local storage
  function checkScore (myScore, high_score) {
    high_score = localStorage.getItem("high_score");
    if(high_score !== null) {
      if(myScore >= high_score){
        localStorage.setItem("high_score", score);

      }
    } else {
      localStorage.setItem("high_score", score);
    }
  }

  //disbles the game board
  function disableBoard () {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
  }



})
