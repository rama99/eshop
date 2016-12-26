var express = require('express');

var router = express.Router();


router.get('/' , function(req , res , next) {
    res.render('index.html');
})

router.post('/orderplaced', function(req , res , next) {
    res.status(200).send({'created':'ok'});
    //res.status(200).send('test');
})

module.exports = router;