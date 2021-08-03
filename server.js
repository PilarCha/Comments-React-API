const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Pusher =require('pusher');
const app_id = process.env.APP_ID;
const key = process.env.KEY;
const secret = process.env.SECRET;
const cluster = process.env.CLUSTER;

// getting pusher starteddddd
var pusher = new Pusher({
  appId: app_id,
  key: key,
  secret: secret,
  cluster: cluster,
  encrypted: true
});

// starting up express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Error handler for 404 pages

app.use(function(req,res,next) {
  var error404 = new Error("Route Not Found");
  error404.status = 404;
  next(error404);
})

// API begin funnnn

module.exports = app;

app.listen(9000, function() {
  console.log('Example app listening on port 9000')
})
