/*
playground:

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
  mongoose.UserData.find()
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
app.get("/remove", (req,res) => {
  mongoose.UserData.findOneAndRemove({ title: "title2" })
    .exec(function(err, item) {
      if (err) {
        return res.json({success: false, msg: 'Cannot remove item'});
      }
      if (!item) {
        return res.status(404).json({success: false, msg: 'User not found'});
      }
    res.json({success: true, msg: 'User deleted.'});
  });
});
app.put("/getTwoParams/:id1/:id2", (req,res) => {
  res.send(`PUT: this is two params: id1=${req.params.id1} , id2=${req.params.id2}`);
});
*/
