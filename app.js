var createError = require('http-errors');
var express = require('express');
var zlib = require('zlib');

var vehiclesRouter = require('./routes/vehicles');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/vehicles', vehiclesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  const status = err.statusCode || 500;

  if (err.response.headers['content-encoding'] == 'gzip') {
    return zlib.gunzip(err.response.body, function(err, dezipped) {
      res.status(status);
      res.json({
        status,
        message: dezipped.toString()
      });
    });
  }

  // render the error page
  res.status(status);
  return res.json({
    status,
    message: err.message
  });
});

module.exports = app;
