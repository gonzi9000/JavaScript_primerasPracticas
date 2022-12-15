var express = require('express');
var router = express.Router();

const controller = require(('../controller/index'));
 const data = require('../data/menu');

/* GET home page. */
router.get('/',controller.index);

/*  router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
       */
module.exports = router;
