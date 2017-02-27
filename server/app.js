//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path'); //allows us to join things, and put things together

var port = 3000;

//app.uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
//routes

//spin up the server
app.listen(port, function(){
  console.log('My program is on port: ', port);
}); //end server up


//home body-parser
app.get('/', function(req, res){
  console.log('home base url hit');
  res.sendFile(path.resolve('public/views/index.html')); //sends the index to the client
});

//do math
app.post('/math', function(req, res){
  //recieve the object from the client
  if (req.body.type == 'add'){
    var answer = Number(req.body.x) + Number(req.body.y);
  } else if (req.body.type == 'subtract'){
    var answer = Number(req.body.x) - Number(req.body.y);
  } else if (req.body.type == 'multiply'){
    var answer = Number(req.body.x) * Number(req.body.y);
  } else if (req.body.type == 'divide'){
    var answer = Number(req.body.x) / Number(req.body.y);
  }
  //determine the operator based on req.body.type
  //do the correct math
  //return the answer in an object
  var objectToSend = {
    answer: answer
  }
  res.send(objectToSend);
  console.log('I am at math: ', req.body);
  res.send('ribbit');
});
