var Li = document.querySelectorAll("li"); 

console.log(Li); 

for(var i = 0; i < Li.length ; i++){
    Li[i].addEventListener("mouseover", function(){
        this.style.color = "green";
    });    
}

/* firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout", function(){
    firstLi.style.color = "black";
}); */