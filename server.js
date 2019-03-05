var express = require('express');
var socket = require('socket.io');

var app = express();


server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});



io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('data', function(data){
        io.emit('data', data);
    });


    socket.on('user', function(data){
    	io.emit('user', data );
    });

});



