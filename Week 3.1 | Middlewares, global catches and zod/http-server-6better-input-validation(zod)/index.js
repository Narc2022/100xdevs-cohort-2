const express = require("express");
const zod = require("zod");
const app = express();

//syntax of schema for validation
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;

  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      error: response.error.issues || "Input is Invalid",
    });
  }

  res.send({
    response,
  });
});

app.listen(3000);
