//These are running on the front end
//Make connection
let socket = io.connect('http://localhost:4000');

//Querying the DOM and creating variables
let message = document.querySelector('#message'),
    handle = document.querySelector('#handle'),
    btn = document.querySelector('#send'),
    output = document.querySelector('#output');

//Emit events
btn.addEventListener('click', function() {
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
});

//Listen for events
socket.on('chat',function(data){
    output.innerHTML += `<p><strong> ${data.handle}: </strong> ${data.message}</p>`
});