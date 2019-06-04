var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var x = event.clientX;     // Get the horizontal coordinate
var y = event.clientY;     // Get the vertical coordinate


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
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
  }