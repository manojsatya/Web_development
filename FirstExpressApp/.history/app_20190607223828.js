var express = require("express");
var app = express();

// "/" "Hi there"
app.get("/", function(req, res){
    res.send("Hi there Manoj Manoj");
});
// "/bye" "Good bye"
// "/dog" "MEOW"


// Tell express to listen for request

app.listen(3000, function(){
    console.log("Server has started!!");
});