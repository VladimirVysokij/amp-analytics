var express = require('express');
var ampValidator = require('../utils/ampValidator');

var router = express.Router();
// var request = require('request');

/* GET test page. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'test'
  };

  res.render('index', data);
});

router.post('/', function(req, res) {
  const { body } = req;
  // const URL = body.list[0];

  const send = data => {
    res.send({
      result: data
    });
  };

  ampValidator(body.list, send);
});

module.exports = router;
