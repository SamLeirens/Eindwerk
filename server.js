var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.port || 3001);
console.log("server connected");

app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection',function (socket) {
    connections.push(socket);
    console.log('connected: %s sockets connected',connections.length);

    socket.on('room', function(room) {
      console.log("joining " + room);
      socket.join(room);
    });

    //Dc
    socket.on('disconnect',function (data) {
        users.splice(users.indexOf(socket.username),1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected',connections.length);
    });

    //send
    socket.on('send message',function (data,user,room) {
        console.log(room);
        io.to(room.room).emit('new message',{msg:data,user:user});
    });

    //new user
    socket.on('new user',function (data) {
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users',users);
    }

});
