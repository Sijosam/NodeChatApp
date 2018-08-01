const path     = require('path');
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));


io.on('connection', (socket) => {
  console.log('new user Connected');



  socket.on('disconnect', (socket) => {
  console.log('client has leaved');
});

});

server.listen(port, () => {
  console.log('Started the Server');
});
// Rijo.Sam@cognizant.com
