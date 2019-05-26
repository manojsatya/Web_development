var todos =["Buy tomotoes"];

var input = prompt(" What would you like to do?"); 



while (input != "quit"){
    if (input == "list"){
        listtodos();
    } else if(input == "new"){
        addtodo();
    } else if (input === "delete"){
        deletetodo();
    }
    input = prompt(" What would you like to do?"); 
    // ask again for input 
}

console.log("You quit the App!!!");

function listtodos(){
    console.log("*************");
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("*************"); 
}

function addtodo(){
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added todo");
    // add new todo to list
}

function deletetodo(){
    //ask for index to delete
    var index = prompt("Enter the index to delete");
    // delete the item with that index
    todos.splice(index, 1);
    console.log("deleted todo");
}