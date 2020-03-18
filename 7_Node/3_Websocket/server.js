var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

// écoute les connexion User
io.on('connection', function(socket){
    console.log('a user connected');
    socket.broadcast.emit('hi');

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    })
    //écoute les déco 
    socket.on('disconnect', function() {
        console.log('a user is disconnected')
    })
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});