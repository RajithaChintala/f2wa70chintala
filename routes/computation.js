var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var i=Math.random();
    res.render('computation', { a: `Math.fround() applied to ${i} is ${Math.fround(i)}`,
    b: `Math.random() applied to ${i} is ${Math.random(i)}` ,
    c: `Math.round() applied to ${i} is ${Math.round(i)}` });
  }
  else{

    for (let x in req.query) {

      console.log(x)

      res.render('computation', { a: `Math.fround() applied to ${req.query[x]} is ${Math.fround(req.query[x])}`,
      b: `Math.random() applied to ${req.query[x]} is ${Math.random(req.query[x])}` ,
      c: `Math.round() applied to ${req.query[x]} is ${Math.round(req.query[x])}` })

    }
  }


});


module.exports = router;