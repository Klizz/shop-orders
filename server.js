var express = require('express');
var app = express();
require('dotenv').config()
const request = require('request');
const token = process.env.TOKEN

const url = `https://${token}@18.219.54.186/api/orders/1?output_format=JSON`;

let settings = { 
  method: "Get",
  strictSSL: false
};

request(url, settings, (error, res, body) => {
  if (error) {
      return  console.log(error)
  };
  if (!error && res.statusCode === 200) {
      console.log(body)
  };
});

app.listen(5000, function(){
  console.log('Server listening on port 5000');
});