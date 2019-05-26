var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){    
    if(!gameOver){
        p1Score++;
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
    alert("clicked");
    /* p1Score = 0;
    p2Score = 0; */
});