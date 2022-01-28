const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var TinyURL = require('tinyurl');
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.get("/", function(req, res){
  res.render("index");
})
// Insertion of urs.css file where path is views>css>url.css

app.use(express.static('views'));

app.post('/sign-up', function(req, res){
  res.send("<h2> You have resistered successfully...</h2>");
 
})
app.post("/Login", function(req, res){
  res.render("index");
})
app.post("/shortenUrl", function(req, res){
 
  var url = req.body.fullUrl;
   
  TinyURL.shorten(url, function(result, error) {
    if (error)
    res.send(error)

    res.send(result);
  
  });
  //res.redirect('/');
})

app.listen(3000, function(){
    console.log("This server strat from port 3000");
});
