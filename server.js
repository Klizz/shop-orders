var express = require("express");
var cors = require("cors");
var app = express();
const request = require("request");

require("dotenv").config();
const key = process.env.TOKEN;

app.use(cors());

// GET DATA FROM ALL ORDERS
const url = `http://${key}@18.219.54.186/api/orders/1?output_format=JSON`;
app.get("/getdata", (req, res, next) => {
  request.get(url, (err, response) => {
    console.log(err);
    res.send(JSON.parse(response.body));
    console.log(response.body)
  });
});

//GET DATA FROM SPECIFIC ORDERS
/* app.get("/getdata/:id", (req, res, next) => {
  request.get(url, (err, response) => {
    console.log(err);
    res.send(JSON.parse(response.body));
  });
}); */

// RUN SERVER
app.listen(5000, function () {
  console.log("Server listening on port 5000");
});
