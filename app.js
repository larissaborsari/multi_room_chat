// importing server configurations
var app = require('./config/server.js');

//listening door
app.listen(80, function() {
    console.log('Server online');
});