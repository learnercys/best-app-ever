var express = require('express');
var router = express.Router();

/* GET vehicles listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'index'});
});

module.exports = router;
