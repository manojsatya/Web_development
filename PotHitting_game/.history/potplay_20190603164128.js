var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");
var clicktext = document.getElementById("clicks");
var showDist = document.getElementById("dist");
var clickCount = 0;
var reset = document.querySelector(".reset");
var xPot, yPot;
//var target = {};
var DOMobject = document.createElement("div");

playarea.addEventListener("click", function(){
    clickCount++ ;
    clicktext.textContent = clickCount;
    xClick = event.clientX;
    yClick = event.clientY;
    //var distance = Math.sqrt(Math.pow(xPot - xClick, 2) + Math.pow(yPot - yClick, 2));
    //showDist.textContent = distance;
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
    clickCount = 0;
    clicktext.textContent = clickCount;
    distance = 0;
    showDist.textContent = distance;
    xPot = playarea.offsetLeft + Math.floor(playarea.offsetWidth * Math.random());
    yPot = playarea.offsetTop + Math.floor(playarea.offsetHeight * Math.random());
    targetarea.style.offsetTop = yPot + "px";
    //targetarea.style.marginLeft = "300px";
    targetarea.style.backgroundColor = "red";
    /* DOMobject.id = "target";
    DOMobject.style.width = "20px";
    DOMobject.style.height = "20px";
    DOMobject.style.backgroundColor = "red";
    DOMobject.style.position = "relative";
    DOMobject.style.marginTop = "-300px";
    DOMobject.style.marginLeft = "300px";
    //DOMobject.style.left = playarea.offsetTop + 20 ;
    document.getElementById("wrapper").appendChild(DOMobject); */
});

targetarea.addEventListener("click", function(){
    
    targetarea.style.backgroundColor = "red";
    //alert("Clicked the target area");
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