var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("easyBtn");
var hardBtn = document.querySelector("hardBtn");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color of pickedColor
        if (clickedColor === pickedColor){
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play Again?";
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    // Loop through all squares
        for(var i = 0; i < squares.length; i++){
            // Change each square to clickedsquare
            squares[i].style.backgroundColor = color;
        }
    
}

function pickColor(){
  var random = Math.floor((Math.random() * colors.length));
  return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num radom colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    // pick red 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick green 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick blue 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
})