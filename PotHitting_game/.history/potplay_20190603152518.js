var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var x;
var y;
var xPot = 250;
var yPot = 300;
var showDist = document.getElementById("dist");
var clickCount = 0;
var reset = document.querySelector(".reset");


playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    xClick = event.clientX;
    yClick = event.clientY;
    var distance = Math.sqrt(Math.pow(xPot - xClick, 2) + Math.pow(yPot - yClick, 2));
    showDist.textContent = distance;
    //console.log("Herer");
    console.log(" Left: "+ playarea.offsetLeft);
    console.log(" Top: "+ playarea.offsetTop);
    //console.log("Herer");
    

    x = event.clientX;
    y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    console.log(coords);
   
});

reset.addEventListener("click", function(){
    alert(" Start button clicked");
});

targetarea.addEventListener("click", function(){
    
    alert("Clicked the target area");
});

function showCoords(event) {
    x = event.clientX;
    y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    console.log(coords);
   
    document.getElementById("demo").innerHTML = coords;
  }

function getDistance(xPot, xClick, yPot, yClick){
    var distance = Math.sqrt(Math.pow(xPot - xClick, 2) + Math.pow(yPot - yClick, 2));
    return distance;
}