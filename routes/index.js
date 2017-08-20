var express = require('express');
var router = express.Router();
var fileops = require('../utils/fileOperations');

router.post('/gameToServer', function(req, resp, next) {
    console.log(req.body);
    console.log(req.body.name);
    fileops.saveFile({
        name: req.body.name,
        path: 'games',
        text: req.body.text,
    }, (err) => {
        if (err) {
            resp.json({
                ok: false,
                statusText: `err = ${err}`,
            })
        } else {
            resp.json({
                ok: true,
            });
        }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`In get /  --  index.js`);
  res.render('index', { title: 'Express' });
});

module.exports = router;
