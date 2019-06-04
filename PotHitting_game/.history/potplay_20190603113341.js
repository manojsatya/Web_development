var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var x;
var y;


var clickCount = 0;

playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    /* var coor = "X coords: " + x + ", Y coords: " + y;
    console.log(coor); */
});

targetarea.addEventListener("click", function(){
    alert("Clicked the target area");
});

function showCoords(event) {
    x = event.clientX;
    y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    console.log(coords);
   
    //document.getElementById("demo").innerHTML = coords;
  }