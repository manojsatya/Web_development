var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
    // return array
    return arr;


}