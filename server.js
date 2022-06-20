const express= require("express");
const app=express();
//get request 
//for the route directory i.e for the home page like localhost:3000
//that call back function is made so that it can send the response to the browser

app.get("/",function(req,res){
    res.send("<h1>hello world</h1>");
});
//for the contact directory

//localhost:3000/contact for contact route directory 
app.get("/contact",function(req,res){
res.send("contact me at kadiyans990@gmail.com");
});

//for the about route
app.get("/about",function(req,res){
    res.send("i am sahil kadiyan and currently i am learning express!!!");

});
//for the info route
app.get("/info",function(req,res){
    res.send("that's the basic info");
});
app.get("/hobbies",function(req,res){
    res.send("<ul><li>badminton</li><li>coding</li></ul>");
    
});
app.listen(3000,function(){
    console.log("server just started on 3000 port");
});
