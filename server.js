var express = require('express');
var socket = require('socket.io');
var path=require('path');
var app = express();

if(process.env.NODE_ENV === 'production')
{
	app.use(express.static('client/build'));
	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


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



