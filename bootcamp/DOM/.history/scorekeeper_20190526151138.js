var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var h1textp1 = document.querySelector("h1");
var p1Score = 0;
var p2Score = 0;

p1button.addEventListener("click", function(){
    p1Score++;
    console.log(p1Score);
    h1textp1.textContent = p1Score;
});

p2button.addEventListener("click", function(){    
    p2Score++;
    console.log(p2Score);
});