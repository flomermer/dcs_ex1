const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('./db/mongoose.js');

module.exports = class App{
  start(){
    app.get("/", (req,res) => {
      res.send("this is my root!");
    });

    app.get("/insert/:title/:content/:author", (req,res) => {
      var newUser = new mongoose.UserData({
        title: req.params.title,
        content: req.params.content,
        author: req.params.author
      })
      newUser.save();

      res.send("good boy");
    });

    app.get('/getAllBooks', (req,res) => {
      mongoose.UserData.find({title: "title1"})
        .then(function(doc){
          res.send(doc);
        });
    });

    app.get("/getBookByID/:id", (req,res) => {
      mongoose.UserData.find({title: req.params.id})
        .then(function(doc){
          res.send(doc);
        });
    });

    app.put("/getTwoParams/:id1/:id2", (req,res) => {
      res.send(`PUT: this is two params: id1=${req.params.id1} , id2=${req.params.id2}`);
    });

    http.createServer(app).listen(process.env.PORT || 8000);
    console.log("listening on localhost:8000");
  }
}
