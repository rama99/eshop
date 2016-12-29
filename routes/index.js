var express = require('express');

var router = express.Router();


router.get('/' , function(req , res , next) {
   
    req.session.test = req.session.test || [];
     console.log(' Session ID ' , req.sessionID);  
    res.render('index.html');
})



module.exports = router;