var express = require("express");
var app = express();

app.get("/",function(req,res)
{
    res.send("Hi there, welcome to my assignment!")
})

app.get("/speak/:animal",function(req,res){
    var anim = req.params.animal;
    var noise = "whatever an " + anim + " says";
    
    if(anim == 'pig')
        noise = "Oink";
    else if(anim == 'cow')
        noise = "Moo";
    else if(anim == 'dog')
        noise = "I have a bad case of rabies";
    
    res.send("The " + anim + " says " + noise +"!");
})

app.get("/repeat/:phrase/:n",function(req,res)
{
    var n = parseInt(req.params.n,10);
    var phrase = req.params.phrase;
    
    var result = "";
    for(var i = 0; i < n; i++)
    {
        result += (phrase + " ");
    }
    
    res.send(result);
})

app.get("*",function(req,res)
{
    res.send("Sorry, page not found ... What are you doing with your life?");
})


app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("Server is starting!");
})