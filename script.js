// initialize the start point, the start speed and score
let inputDir = { x: 0, y: 0 };
let speed = 5;
let Score = 0;
let lastPaintTime = 0;

// make a function to let the user start the game with a specifc level of difficulty 
function level() {
  let type = document.getElementsByName("levels");
  if (type[0].checked) {
    speed = 4;
    console.log("Easy")
  }
  else if (type[1].checked) {
    speed = 8;
    console.log("medium");
  }
  else if (type[2].checked) {
    speed = 16;
    console.log("hard");
  }
}

// creating the snake array in the beginning of the game in a specific coordinates 
let snakeArr = [

  { x: 13, y: 15 }
]
food = { x: 6, y: 15 };