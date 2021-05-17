const express=require("express");

const app=express();

const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendfile("index.html")
});


app.post("/", function(req, res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result= n1+n2;
  res.send("the answer is " + result);
});

app.get("/about", function(req, res){
  res.send("<h1>Adhikari Sai Bhargav</h1><p>I am a Mechanical Engineer trying to learn web development</p>")
});

app.listen(3000, function(){
  console.log("server has started on port 3000");
});
