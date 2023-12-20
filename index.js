const express = require("express");

function findSum(a, b, c) {
  return a + b + c;
}

const app = express();

app.get("/", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;
  const ans = findSum(a, b, c);
  res.send(ans.toString());
});

app.listen(3000);
