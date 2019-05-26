var Li = document.querySelectorAll("li"); 

console.log(Li);

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseout", function(){
    firstLi.style.color = "black";
});