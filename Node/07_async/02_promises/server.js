var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = Promise;
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
  message.save()
  .then(() => {
    console.log('saved');
    return Message.findOne({message:'badword'});
  })
  .then( censored => {
    if(censored){
      console.log('censored words found', censored);
      return Message.remove({_id: censored.id});
    }
    io.emit('message',req.body);
    res.sendStatus(200);
  })
  .catch((err) => {
    res.senStatus(500);
    return console.error(err);
  });
});

io.on('connection', (socket) => {
  console.log('user connected');
});

mongoose.connect(dbUrl, { useNewUrlParser: true } ,(err) => {
  console.error("mongoDb Connection",err);
});

var server = http.listen(3000, () => {
  console.log('server is listening to the port ', server.address().port);
});
