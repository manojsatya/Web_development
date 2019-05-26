var isPurple = false;

document.getElementById("change").addEventListener("click", function(){
    if(isPurple){
        document.body.style.backgroundColor = "purple";
        isPurple = false;
    }else {
        document.body.style.backgroundColor = "white";
        isPurple = true;
    }
    
});