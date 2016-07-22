var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();  //this is an instant of express
var authenticationController = require('./server/controllers/authentication-controller.js');

mongoose.connect('mongodb://localhost:27017/mean_network'); //mean_network is the database you made in the mongo shell

app.use('/app', express.static(__dirname + '/app')); //serves up the page
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());

// Authentication

app.post('/api/user/signup', authenticationController.signup);




app.listen('3000', function(){
  console.log('This is working');
});

app.get('/', function(req,res){
  res.sendfile('index.html');
});
