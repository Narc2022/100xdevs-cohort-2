const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  console.log("username", username);
  console.log("password", password);
  if (username != "sachin" && password != "pass") {
    res.status(400).json({
      msg: "User doesn't exist",
    });
    return;
  } else {
    next();
  }
}

function kidneyMiddleware(req,res,next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  } else {
    next();
  }
}



app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("Your are healthy");
  }
);

app.get("/kidney-check",userMiddleware,kidneyMiddleware,function(req,res){
  const kidneyId = req.query.kidneyId
  if(kidneyId == 1){
    res.send("you have single kidney please find donor for you")
  }else if(kidneyId == 2){
    res.send("your kidney are healthy")
  }
});

app.listen(3000);
