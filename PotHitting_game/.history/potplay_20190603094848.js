var playarea = document.querySelector(".playarea");
var targetarea = document.querySelector(".target");

var clickCount = 0;

playarea.addEventListener("click", function(){
        alert("Clicked the play area");
});

targetarea.addEventListener("click", function(){
    alert("Clicked the target area");
});