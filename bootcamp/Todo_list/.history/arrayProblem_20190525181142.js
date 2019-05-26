function printReverse(array){
    for(var i = array.length-1; i >= 0; i--){
        console.log(array[i]);
    }
}

var a = [3, 3,3,3,3, 2, 5, 1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 2];

//printReverse([3, 2, 5, 1])

function isUniform(array){
    var first = array[0];
    for(var i = 1; i < array.length; i++){
        if (array[i] !== first){
            return false;
        }               
    }
    return true;
}

isUniform(a);

function sumArray(array){

}

function max(array){

}

