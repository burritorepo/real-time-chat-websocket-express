var express = require('express');
var socket = require('socket.io');


//App setup
var app = express();

//Creating a server and listening to a specific port number, we add a callback function to know if it's working
var server = app.listen(4000, function (){
    console.log('listening to requests on port 4000');
});

//Static files
app.use(express.static('public'));

//socket set up
var io = socket(server);

io.on('connection', function (socket){
    console.log('made socket connection',socket.id);
    socket.on('chat', function(data) {
        io.sockets.emit('chat',data);
    })
});

