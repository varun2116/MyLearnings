npm install -s socket.io
##html
<script src="/socket.io/socket.io.js"></script> add script tag in html

var socker = io(); init

##Node
var server = http.listen(3000, () => {
  console.log('server is listening to the port ', server.address().port);
});

io.emit('message',req.body); to send the socket
