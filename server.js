var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req,res) => {
	res.send("Hello World");
});

io.on('connection', (socket) => {
	console.log('A user Connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
	socket.on('disconnect', function(){
    	console.log('User disconnected');
    });
})

http.listen(3001, () => {
	console.log("Server listening on port 3001");
})