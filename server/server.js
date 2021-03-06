const path     = require('path');
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');

const {generateMsg} = require('./utils/msg');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));


io.on('connection', (socket) => {
  console.log('new user Connected');
     socket.emit('newMsg', generateMsg('Admin',"welcome to the chat App"));
      socket.broadcast.emit('newMsg', generateMsg('Admin',"New User Joined"));

       socket.on('createMsg', (newMsg) => {
        console.log('createMsg', newMsg);
        io.emit('newMsg', generateMsg(newMsg.from,newMsg.text));

        // socket.broadcast.emit('newMsg', {
        //     from:newMsg.from,
        //     text:newMsg.text,
        //     createdAt: new Date().getTime()
        // });
      });

          socket.on('disconnect', (socket) => {
          console.log('client has leaved');
           });

      });

server.listen(port, () => {
  console.log('Started the Server');
});
// Rijo.Sam@cognizant.com
