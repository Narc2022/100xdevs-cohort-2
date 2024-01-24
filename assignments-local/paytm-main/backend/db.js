// mongoose
const mongoose = require('mongoose');

//user schema
const userSchema = new mongoose.Schema({
     username:String,
     password:String,
     firstName:String,
     lastName:String
})

//create model from schema
const User = mongoose.model('User', userSchema);

module.export={
    User
}