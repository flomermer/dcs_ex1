const mongoose = require('mongoose');
const consts = require('../config').consts;
const Schema = mongoose.Schema;

mongoose.connect(consts.MLAB_KEY,function(err){
  console.log("connected to mLab");
});

var BookSchema = new Schema({
    name: {type:String, required: true},
    author: {type:String, required:true},
    minAge: Number,
    maxAge: Number,
    year: Number,
    price: Number,
    rating: {
      stars: Number,
      votes: Number
    }
  },{collection: 'Book'});


module.exports = mongoose.model('Book',BookSchema);
