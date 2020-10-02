var express = require('express');
var app = express();
require('dotenv').config()
const request = require('request');
const key = process.env.TOKEN
const url = `http://${key}@18.219.54.186/api/orders?output_format=JSON`;

app.get("/getdata", (req, res, next) => {
  request.get(url, (err, response, body) => {
    console.log(err)
      res.send(response.body)
  });
});

app.listen(5000, function(){
  console.log('Server listening on port 5000');
});