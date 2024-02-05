// mongoose
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://100xdevssachin:sachin243@100xdevs.uisiqme.mongodb.net/paytm"
);

//user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
});

//create model from schema
const User = mongoose.model("User", userSchema);

module.export = {
  User,
};
