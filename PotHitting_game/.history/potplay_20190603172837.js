var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var showDist = document.getElementById("dist");
var clickCount = 0;
var reset = document.querySelector(".reset");
var xPot, yPot;


playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    xClick = event.clientX;
    yClick = event.clientY;
    //var distance = Math.sqrt(Math.pow(xPot - xClick, 2) + Math.pow(yPot - yClick, 2));
    //showDist.textContent = distance;
    //console.log("Herer");
    //console.log(" Left: "+ playarea.offsetLeft);
    //console.log(" Top: "+ playarea.offsetTop);
    //console.log("Herer");
    

    x = event.clientX;
    y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    //console.log(coords);
   
});

reset.addEventListener("click", function(){
    clickCount = 0;
    clicktext.textContent = clickCount;
    distance = 0;
    showDist.textContent = distance;
    var maxX = playarea.offsetWidth + playarea.offsetLeft;
    var minX = playarea.offsetLeft;
    var maxY = playarea.offsetHeight + playarea.offsetTop;
    var minY = playarea.offsetTop;
    xPot = Math.floor(Math.random() * (maxX - minX)) + minX - targetarea.clientWidth;
    //yPot = -1 * (Math.floor(Math.random() * (maxY - minY)) + minY - targetarea.clientHeight);
    yPot = -1 * (Math.floor(Math.random() * playarea.offsetHeight) + targetarea.clientHeight);
    targetarea.style.position = "absolute";
    targetarea.style.marginLeft = xPot + "px";
    targetarea.style.marginTop = yPot + "px";
    targetarea.style.backgroundColor = "red";
    console.log("MaxY: "+ maxY);
    console.log("MinY: "+ minY);
    console.log("xPot: " + xPot + ", yPot: " + yPot);
    
});

targetarea.addEventListener("click", function(){
    
    targetarea.style.backgroundColor = "red";
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