const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chatroom'
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined',
    createAt: new Date().getTime()
  });
  // socket.emit('newMessage', {
  //   from: 'Floki',
  //   text: 'Hey, it me',
  //   creatAt: 123
  // });

  socket.on('createMessage', message => {
    console.log('create Message', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('test');
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
