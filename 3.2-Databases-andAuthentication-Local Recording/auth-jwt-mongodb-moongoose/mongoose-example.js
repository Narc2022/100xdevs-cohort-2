const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.use(express.json());
mongoose.connect(
  "mongodb+srv://100xdevssachin:sachin2024@100xdevs.uisiqme.mongodb.net/userappnew"
);

//schema look like
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: email });
  console.log('existingUser', existingUser)
  //CRUD create,update,delete, read
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }
  const user = new User({ name: name, email: email, password: password });
  user.save();
  res.json({
    msg: "User created successfully",
  });
});
app.listen(3000)
