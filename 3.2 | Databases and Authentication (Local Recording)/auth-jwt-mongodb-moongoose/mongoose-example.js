const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://100xdevssachin:sachin2024@100xdevs.uisiqme.mongodb.net/userappnew");

//schema look like
const User = mongoose.model('User',{name:String, email:String, password:String});

const user = new User({name:'Sachin Singh', email:'100xdevssachin@gmail.com',password:'123457'});

user.save();