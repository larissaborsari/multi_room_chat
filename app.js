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
     })
})
