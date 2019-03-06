var express = require('express');
var socket = require('socket.io');
const path = require('path');
const port = process.env.PORT || 5000;
var app = express();




if(process.env.NODE_ENV == 'production')
{
	app.use(express.static('build'));
	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname , 'build' , 'index.html'));
	});
}
else
{
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

}

var server = app.listen(port, function(){
    console.log('server is running on port 5000')
});



var io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('data', function(data){
        io.emit('data', data);
    });


    socket.on('user', function(data){
    	io.emit('user', data );
    });

});



