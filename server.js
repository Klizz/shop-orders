var express = require('express');
var app = express();
require('dotenv').config()
const request = require('request');
const key = process.env.TOKEN
const url = `https://${key}@18.219.54.186/api/orders?output_format=JSON`;
const userROUTER = express.Router();

app.get("/getdata", (req, res, next) => {
  request.get(url, (err, response, body) => {
      if (err) {
        res.json({ error: err })
      }
      res.render("error", {data: JSON.parse(body)});
  });
});

module.exports = userROUTER;

app.listen(5000, function(){
  console.log('Server listening on port 5000');
});