function printReverse(array){
    for(var i = array.length-1; i >= 0; i--){
        console.log(array[i]);
    }
}

var a = [3, 3,3,3,3, 2, 5, 1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 2];

//printReverse([3, 2, 5, 1])

function isUniform(array){
    for(var i = 0; i < array.length-1; i++){

        if (array[i] === array[i+1]){
            console.log(array[i] + "---"+ array[i+1] + ":Yes");
        } else {
            console.log(array[i] + "---"+ array[i+1] + ":NO");
        }        
    }
}

isUniform(a);

function sumArray(array){

}

function max(array){

}

