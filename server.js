const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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

module.exports = app;

app.listen(9000, function() {
  console.log('Example app listening on port 9000')
})
