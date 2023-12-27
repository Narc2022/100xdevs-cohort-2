const express = require("express");
const app = express();

const users = [
  {
    name: "john",
    kidneys: [{ healthy: false }],
  },
];

app.use(express.json());
app.get("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  const noOfKidney = johnKidney.length;
  const numberOfHealthyKidneys = johnKidney.filter(
    (kidney) => kidney.healthy
  ).length;
  const numberOfUnhealthyKidneys = noOfKidney - numberOfHealthyKidneys;
  console.log("numberOfHealthyKidneys", numberOfHealthyKidneys);
  console.log("johnKidney", johnKidney);
  res.send({
    noOfKidney,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({ msg: "Done!" });
});

app.put("/", function (req, res) {
  const johnKidney = users[0].kidneys;
  johnKidney.map((kidney) => {
    console.log("kidney", kidney);
    if (kidney.healthy == false) {
      kidney.healthy = true;
    }
  });
  res.json({ message: "all kidney is healthy", johnKidney });
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  const johnKidney = users[0].kidneys;
  const noOfKidney = johnKidney.length;
  const numberOfHealthyKidneys = johnKidney.filter(
    (kidney) => kidney.healthy
  ).length;
  johnKidney.map((kidney) => {
    if (kidney.healthy == true) {
      newKidneys.push(kidney);
    }
    
  });
  users[0].kidneys = newKidneys;
  res.json({
    message: "removed unhealthy kidneys",
    numberOfHealthyKidneys
  });
});

app.listen(3000);
