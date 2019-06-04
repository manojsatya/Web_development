var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");

var clickCount = 0;

playarea.addEventListener("click", function(){
    clickCount++ ;
    console.log(clickCount);
});

targetarea.addEventListener("click", function(){
    alert("Clicked the target area");
});