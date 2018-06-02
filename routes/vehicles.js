var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET vehicles listing. */
router.get('/:year/:manufacturer/:model', function(req, res, next) {
  var { year, manufacturer, model } = req.params;

  var options = {
    uri: `https://one.nhtsa.gov/webapi/api/SafetyRatings/modelyear/${year}/make/${manufacturer}/model/${model}`,
    qs: {
      format: 'json'
    },
    json: true
  };
  
  rp(options)
    .then(function(response) {
      var vehicles = {
        Count: response.Count,
        Results: response.Results
      }

      res.json(vehicles);
    })
    .catch(next);
});

module.exports = router;
