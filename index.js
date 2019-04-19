var express = require('express');


//App setup
var app = express();

//Creating a server and listening to a specific port number, we add a callback function to know if it's working
var server = app.listen(4000, function (){
    console.log('listening to requests on port 4000');
});

//Static files
app.use(express.static('public'));