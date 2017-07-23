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
    from: 'Floki',
    text: 'Hey, it me',
    creatAt: 123
  });

  socket.on('createMessage', message => {
    console.log('create Message', message);
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
