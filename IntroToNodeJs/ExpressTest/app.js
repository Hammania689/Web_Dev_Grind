var express = require("express");
var app = express();


app.get("/dog", function (req,res){
    res.send("Ruff");
});

app.get("/r/:subRedditName", function (req,res){
    res.send("WELCOME TO A SUBREDDIT ABOUT!");
});

app.get("/r/:subRedditName/comments/:id/:title", function (req,res){
    var title = req.params.title;
    res.send("WELCOME TO A SUBREDDIT ABOUT " + title.toUpperCase() + "!");
});

app.get("*", function(req,res)
{
    res.send("You are a star");
});

app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("Sever has started!");     
});

