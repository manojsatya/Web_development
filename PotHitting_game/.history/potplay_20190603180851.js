var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var showDist = document.getElementById("dist");
var clickCount = 0;
var reset = document.querySelector(".reset");
var xPot, yPot;
var distance_old = 0;

playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    xClick = event.clientX;
    yClick = event.clientY - playarea.offsetHeight - playarea.offsetTop;
     
    var distance_new = Math.sqrt(Math.pow(xPot - xClick, 2) + Math.pow(yPot - yClick, 2));
    showDist.textContent = distance_new;
    
    if(distance_new < distance_old){
        document.getElementById("hint").innerHTML = "hot";
        document.getElementById("hint").style.color = "green";
    } else {
        document.getElementById("hint").innerHTML = "cold";
        document.getElementById("hint").style.color = "red";
    }
    distance_old = distance_new;
    /* x = event.clientX ;
    y = event.clientY - playarea.offsetHeight - playarea.offsetTop;
    
    var coords = "X coords: " + x + ", Y coords: " + y;
    
    console.log(coords);
    console.log("xPot: " + xPot + ", yPot: " + yPot); */
   
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
    targetarea.style.backgroundColor = "aqua";
     
    
});

targetarea.addEventListener("click", function(){
    
    targetarea.style.backgroundColor = "red";
    alert("Clicked the target area . YOU WON THE GAME!!!");
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