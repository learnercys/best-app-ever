var express = require('express');
var router = express.Router();
var rp = require('request-promise');

function getVehicles(year, manufacturer, model) {
  var options = {
    uri: `https://one.nhtsa.gov/webapi/api/SafetyRatings/modelyear/${year}/make/${manufacturer}/model/${model}`,
    qs: {
      format: 'json'
    },
    json: true
  };

  return rp(options)
    .then(function(response) {
      return {
        Count: response.Count,
        Results: response.Results
      }
    });
}

router.post('/', function(req, res, next) {
  var { modelYear, manufacturer, model } = req.body;

  getVehicles(modelYear, manufacturer, model)
    .then(function(vehicles) {
      res.json(vehicles);
    })
    .catch(next);
});

/* GET vehicles listing. */
router.get('/:year/:manufacturer/:model', function(req, res, next) {
  var { year, manufacturer, model } = req.params;

  getVehicles(year, manufacturer, model)
    .then(function(vehicles) {
      res.json(vehicles);
    })
    .catch(next);
});

module.exports = router;
