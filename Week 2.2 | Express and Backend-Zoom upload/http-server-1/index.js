const bodyParser = require("body-parser");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get("/route-handler", function (req, res) {
  // headers, body, query parameter
  //do machine learning model
  res.json({ name: "SACHIN", age: 27 });
});

app.post("/backend-api/conversation", function (req, res) {
  const message = req.body.message;
  console.log("message", message);
  res.json({
    output: "2 + 2 = 4",
  });
});

app.post("/", function (req, res) {
  const body = req.body;
  console.log("body", body);
  res.send("Hello World!!");
});

app.get("/", function (req, res) {
  res.json({ name: "SACHIN", age: 27 });
});

app.listen(port, () => {
  console.log(`Example of app listening on port ${port}`);
});
