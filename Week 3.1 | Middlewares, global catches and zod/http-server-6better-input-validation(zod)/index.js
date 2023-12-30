const express = require("express");
const app = express();

app.use(express.json());


app.post("/health-checkup", function (req, res) {
  console.log("req.body.kidneys", req.body.kidneys);
  const kidney = req.body.kidneys;
  const kidneyLength = kidney.length;

  res.send("you have " + kidneyLength + " kidneys");
});

app.listen(3000);
