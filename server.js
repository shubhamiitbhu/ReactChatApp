var express = require('express');
var socket = require('socket.io');
var path=require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'Client' , 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
});


server = app.listen(process.env.PORT || 5000, function(){
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



