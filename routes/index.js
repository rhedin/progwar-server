var express = require('express');
var router = express.Router();

router.post('/gameToServer', function(req, resp, next) {
    console.log(`Weeeee are hereeeeee!`);
    resp.send('I got it.');
});

router.get('/gameToServer', function(req, resp, next) {
    console.log(`found gameToServer with get`);
    resp.send('I got it.');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`In get /  --  index.js`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
