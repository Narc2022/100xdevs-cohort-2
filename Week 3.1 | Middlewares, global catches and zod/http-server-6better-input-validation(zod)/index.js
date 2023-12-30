const express = require("express");
const app = express();

app.use(express.json());

//Middleware
function middleWare(req, res, next) {
  fetch().then(() => {
    next();
  });
}

app.post("/health-checkup", function (req, res) {
  console.log("req.body.kidneys", req.body.kidneys);
  const kidney = req.body.kidneys;
  const kidneyLength = kidney.length;

  res.send("you have " + kidneyLength + " kidneys");
});

//Global Catch
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json("sorry somthing is wrong with server");
});
app.listen(3000);
