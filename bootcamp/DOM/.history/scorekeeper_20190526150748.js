var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1Score = 0;

p1button.addEventListener("click", function(){
    p1Score++;
    console.log(p1Score);
});