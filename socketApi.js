var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

socketApi.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log('message', msg)
    io.emit('chat message', msg);
  });
  socket.on("Lifetotals", (obj) => {
    console.log('lifetotals', obj)
    io.emit('lifetotals', obj);
  });
});



module.exports = socketApi;