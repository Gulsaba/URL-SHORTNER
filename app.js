const express=require("express");
const app=express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
//const app = tiny
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/urldb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected successfully to mongodb");
});

const urlSchema =  new mongoose.Schema({
  
        name: String,
       point:Number
   
})
const url = mongoose.model('url', urlSchema);
const urls = new url({ 
    name:"shorturl",
    point:4
 });
 urls.save();

 
app.get('/', function(req, res){
    res.send("Hello world")
    
})
app.get('/about',function(req, res){
    res.send("This is about root");
})
*/
var TinyURL = require('tinyurl');

/*var url = "https://www.npmjs.com/package/tinyurl"
 
TinyURL.shorten(url, function(result, error) {
  if (error)
  res.send(error)
   res.send(result);
});
*/
app.get('/', function(req, res){
    res.sendFile(__dirname + "/cal.html");
})
app.post('/result', function(req, res){
    //res.send("hello world") 
    /* we canot defind more than one res
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = num1+num2
    res.send(result)*/
    var url = "https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows"
 
    TinyURL.shorten(url, function(result, error) {
      if (error)
      res.send(error)
       res.send(result);
    });
})
app.listen(1000, function(){
    console.log("serevrr is strated with port number 1000");
})
