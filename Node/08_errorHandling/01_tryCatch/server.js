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

app.post('/messages', async (req,res) => {

  try{
    //throw 'some error';
    var message = new Message(req.body);
    var savedMessage = await message.save();
    console.log('saved');

    var censored = await Message.findOne({message:'badword'});

    if(censored)
        await Message.remove({_id: censored.id});
    else
        io.emit('message',req.body);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
    return console.error(error);
  }

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
