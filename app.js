var createError = require('http-errors');
var express = require('express');

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
  const status = err.status || 500;

  // render the error page
  res.status(status);
  res.json({
    message: err.message,
    status    
  });
});

module.exports = app;
