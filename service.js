const http = require('http');
const express = require('express');
const app = express();

module.exports = class App{
  start(){
    app.get("/", (req,res) => {
      res.send("this is my root!");
    });
    app.get('/getAllBooks', (req,res) => {
      res.send("GET: return json of all books");
    });

    app.post("/getBookByID/:id", (req,res) => {
      res.send(`POST: this is book by id=${req.params.id}`);
    });

    app.put("/getTwoParams/:id1/:id2", (req,res) => {
      res.send(`PUT: this is two params: id1=${req.params.id1} , id2=${req.params.id2}`);
    });

    http.createServer(app).listen(process.env.PORT || 8000);
    console.log("listening on localhost:8000");
  }
}
