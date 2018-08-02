
var socket = io();

socket.on('connect' ,function() {
  console.log("connect to something")

});

socket.on('disconnect',function(){
  console.log('disconnect from server');
});

socket.on('newMsg', function(msg){
  console.log('New Msg',msg);
});
