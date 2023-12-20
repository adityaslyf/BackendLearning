const express = require("express");

const users = [
  {
    name: "Aditya",
    kidneys: {
      healthy: false,
      quantity: 2,
    },
  },
];

const app = express();

app.get("/", function (req, res) {
  const adityaKidney = users[0].kidneys;
  let noOfKidneys = adityaKidney.quantity;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (adityaKidney.healthy) {
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

app.post('/',)

app.listen(3000);
