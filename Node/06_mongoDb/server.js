var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var dbUrl = "mongodb://user:Password1@ds235461.mlab.com:35461/learning-node";

var Message = mongoose.model('Message',{
  name: String,
  message: String
});

app.get('/messages', (req,res) => {
  Message.find({}, (err,messages)=>{
    res.send(messages);
  });
});

app.post('/messages', (req,res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if(err){
      senStatus(500);
    }
    io.emit('message',req.body);
    res.sendStatus(200);
  });
});

io.on('connection', (socket) => {
  console.log('user connected');
});

mongoose.connect(dbUrl ,(err) => {
  console.error("mongoDb Connection",err);
});

var server = http.listen(3000, () => {
  console.log('server is listening to the port ', server.address().port);
});
