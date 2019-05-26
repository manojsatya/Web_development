var num = prompt("Enter a number!!");

function isEven(num){
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function factorial(num){
    output = 1;

    if (num == 0){
        return 1;
    } else{
        while (num != 1){
            output = output * num;
            num--;
        }
        return output;
    }
    
}

