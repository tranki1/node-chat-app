var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createMessage', {
  //   from: 'Kim',
  //   text: 'Hey thats work'
  // });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New Message', message);
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  $('#messages').append(li);
});

$('#message-form').on('submit', function(e) {
  e.preventDefault();
  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: $('[name=message]').val()
    },
    function() {
      console.log('got it');
    }
  );
});
