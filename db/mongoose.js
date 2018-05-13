const mongoose = require('mongoose');
const consts = require('../config').consts;

mongoose.connect(consts.MLAB_KEY,function(err){
  console.log("connected to mLab");
});

var userSchema = new mongoose.Schema({
    title: {type:String, required: true},
    content: String,
    author: String
  },{collection: 'item'});

var UserData = mongoose.model('item',userSchema);


module.exports = {
  UserData
}
