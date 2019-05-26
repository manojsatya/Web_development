var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")

p1button.addEventListener("click", function(){    
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winningScore);
        if (p1Score === winningScore){
            p1display.classList.add("winner");
            gameOver = true;
        }
        p1display.textContent = p1Score; 
    }   
    
});

p2button.addEventListener("click", function(){ 
    if(!gameOver){
        p2Score++;  
        if (p2Score === winningScore){
            p2display.classList.add("winner");
            gameOver = true;
        }  
        p2display.textContent = p2Score;
    }       
});

reset.addEventListener("click", function(){
    resetall();
});

function resetall(){
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetall();
});