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


// var buttons = ["button1", "button2", "button3", "button4", "button5"];
// let sequence = [];
// let myButtons = [];
// let currentButton = sequence[sequence.length -1];
//
// function giveRandomButton (arr) {
//   return arr[Math.floor(Math.random() * 5)];
// }
//
// function addButtonsToSequence (arr) {
//   sequence.push(giveRandomButton(arr));
//   return sequence;
// }
// addButtonsToSequence(buttons);
//
// function checkButton(myButton, sequenceButton){
//   if(myButton === sequenceButton) {
//     //display the whole sequence in addition to a new button and
//     giveRandomButton(buttons);
//   } else {
//     gameOver();
//   }
// }
// function checkSequenceLength (arr) {
//   if(arr.length === 20) {
//     gameOver();
//     //display winning message and set the new high score
//   }
// }
//
// function gameOver(){}
// function animate(){
//   for (let i = 0; i < sequence.length; i++) {
//     button.className = "lightUp"
//   }
// }
function generateButton (arr) {
  let randomButton = Math.floor(Math.random() * 5);
  pattern.push(randomButton);
}
function animateButton (elem) {
  if(elem.className === "lightUp"){
    elem.class.toggle("button")
  } else {
    elem.class.toggle("lightUp")
  };
}
function start () {
  score.innerHTML ++;

}
function patternSequence(){}
function myButtonsSequence(){}
//make a button listener which checks the pattern against myButtons
//should also reset
function checksPattern(arr1, arr2){
  for(let i = 0; i < arr2.length; i++){
    
  }
} //loop through myButton array
// make a display error function
// make a function that resets the game

document.addEventListener("DOMContentLoaded", function() {
    let pattern = [];
    //let copyOfPattern = [];
    let myButtons = [];
    let start = document.querySelector(".startButton");
    let buttons = document.getElementsByClassName("button");
    let score = document.querySelector(".score");
    let highScore = 0;
  console.log(generateButton(buttons));
  let newButton;

  console.log(pattern);

  //wait for user to match the button
  // newButton.addEventListener("click", function (){
  //   //continue onwards
  //   //if the button is pushed then it will be added to the pattern array and the score will be increased
  //   pattern.push(newButton);
  //   score++;
  // })

})
