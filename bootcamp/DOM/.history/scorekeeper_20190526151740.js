var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1display")
var p1Score = 0;
var p2Score = 0;

p1button.addEventListener("click", function(){
    p1Score++;
    console.log(p1Score);
    p1display.textContent = p1Score;
});

p2button.addEventListener("click", function(){    
    p2Score++;
    console.log(p2Score);
});