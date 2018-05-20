const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const Book = require('./db/book.js');

module.exports = class App{
  start(){
    app.use(express.static("."));
    
    app.get("/", (req,res) => {
      res.redirect('/API');
    });

    app.get("/API", (req,res) => {
      res.sendFile(path.join(__dirname + '/API/index.html'));
    });

    app.get("/getAllBooks", (req,res) => {
      Book.find()
        .then(function(doc){
          res.json(doc);
        });
    });
    app.get("/getBookByID/:id", (req,res) => {
      Book.find({_id: req.params.id})
        .then(function(doc){
          res.json(doc);
        }).catch(function(err){
          res.json({
            status: "failure",
            error: "bookID not exists"
          })
        });
    });
    app.get("/getBooksByAge/:age", (req,res) => {
      let age = req.params.age;
      Book.find({
        minAge: {$lte : age},
        maxAge: {$gte : age}
      })
        .then(function(doc){
          res.json(doc);
        }).catch(function(err){
          res.json({
            status: "failure",
            error: err
          })
        });
    });
    app.get("/getBooksByRating/:stars/:votes?", (req,res) => {
      let stars = req.params.stars;
      let votes = req.params.votes;
      if(votes==undefined) votes=0;

      Book.find({
        'rating.stars' : {$gte : stars},
        'rating.votes' : {$gte : votes}
      })
        .then(function(doc){
          res.json(doc);
        }).catch(function(err){
          res.json({
            status: "failure",
            error: err
          })
        });
    });

    http.createServer(app).listen(process.env.PORT || 8000);
    console.log("listening on localhost:8000");
  }
}
