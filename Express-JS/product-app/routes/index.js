var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'Powered by Express' });
});

module.exports = router;
