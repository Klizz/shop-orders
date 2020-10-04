var express = require("express");
var cors = require("cors");
var app = express();
require("dotenv").config();
const request = require("request");
const key = process.env.TOKEN;
const url = `http://${key}@18.219.54.186/api/orders/1?output_format=JSON`;

app.use(cors());

app.get("/getdata", (req, res, next) => {
  request.get(url, (err, response) => {
    console.log(err);
    res.send(JSON.parse(response.body));
  });
});

app.listen(5000, function () {
  console.log("Server listening on port 5000");
});
