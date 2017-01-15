'use strict';

var express = require('express');
var router = express.Router();

var path = require('path');

// router.get('/', (req, res) => {
//   var indexPath = path.join(__dirname, '../views/index.html');
//   res.sendFile(indexPath);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
