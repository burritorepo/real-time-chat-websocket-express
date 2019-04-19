//These are running on the front end
//Make connection
let socket = io.connect('http://localhost:4000');

//Querying the DOM and creating variables
let message = document.querySelector('#message'),
    handle = document.querySelector('#handle'),
    btn = document.querySelector('#send'),
    output = document.querySelector('#output'),
    feedback = document.querySelector('#feedback');

//Emit events
btn.addEventListener('click', function() {
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat',function(data){
    output.innerHTML += `<p><strong> ${data.handle}: </strong> ${data.message}</p>`;
    feedback.innerHTML = "";
});

socket.on('typing', function(data){
    feedback.innerHTML = `<p><em> ${data} is typing a message...</em></p>`;
})