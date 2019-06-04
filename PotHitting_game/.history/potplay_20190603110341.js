var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var x;
var y;
var xScreen;
var yScreen;


var clickCount = 0;

playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    var coor = "X coords: " + x + ", Y coords: " + y;
    console.log(coor);
});

targetarea.addEventListener("click", function(){
    alert("Clicked the target area");
});

function showCoords(event) {
    x = event.clientX;
    y = event.clientY;
    xScreen = event.screenX;
    yScreen = event.screenY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    var Screencoords = "X Sccoords: " + xScreen + ", Y Sccoords: " + yScreen;
    console.log(coords);
    //document.getElementById("demo").innerHTML = coords;
  }