var firstLi = document.querySelector("li");

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color = "green";
});

firstLi.addEventListener("mouseunder", function(){
    firstLi.style.color = "black";
});