/*const express = require("express");
const app = express();
const users = [
  {
    name: "Aditya",
    kidneys: {
      healthy: false,
      quantity: 2,
    },
  },
];

app.use(express.json());


app.get("/", function (req, res) {
  const adityaKidney = users[0].kidneys;
  let noOfKidneys = adityaKidney.quantity ;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (adityaKidney[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});

app.listen(3000);
*/


const express = require("express");
const app = express();
const users = [
  {
    name: "Aditya",
    kidneys: {
      healthy: false,
      quantity: 2,
    },
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const adityaKidney = users[0].kidneys;
  const noOfKidneys = adityaKidney.quantity;
  const noOfHealthyKidneys = adityaKidney.healthy ? 1 : 0;
  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.healthy = isHealthy;
  res.json({
    msg: "done",
  });
});

app.put('/', function(res,req){
  for (let i =0; i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
})

app.listen(3000);
