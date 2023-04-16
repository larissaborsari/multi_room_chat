// importing server configurations
var app = require('./config/server.js');

//listening door
var server = app.listen(80, function() {
    console.log('Server online');
});

var io = require('socket.io'). listen(server);

app.set('io', io);

// create web socket connection 
io.on('connection', function(socket){
     console.log('User is connected')

     socket.on('disconnect', function() {
        console.log('User is disconnected')
     });

     socket.on('msgToServer', function(data){
        socket.emit('msgToClient', {apelido: data.apelido, mensagem: data.mensagem})
        socket.broadcast.emit('msgToClient', {apelido: data.apelido, mensagem: data.mensagem})

        if(parseInt(data.apelido_update_client == 0)){
            socket.emit('participantsToClient', {apelido: data.apelido})
            socket.broadcast.emit('participantsToClient', {apelido: data.apelido})
        }


     })
})
