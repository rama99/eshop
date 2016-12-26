const express = require('express');

// express middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favIcon = require('serve-favicon');

// view engine
const ejs = require('ejs');

// routes
const index = require('./routes/index');
const category = require('./routes/category');


// core module path
const path = require('path');



module.exports = function(app) {

    app.use(favIcon(path.join(__dirname , '/client/favicon.png')));

    // set view engine
    app.set('view engine' , ejs);

    // set views path
    app.set('views' , './views');

    app.engine('html' , require('ejs').renderFile);

    // static files path
    app.use(express.static('client'));

    // body parsing
    app.use(bodyParser.json());
    app.use(bodyParser(bodyParser.urlencoded({extended: false})));

    // routes
    app.use(['/acategories/:id/products/:pid', '/acategories/:id/products' , '/cart' , '/about' , '/' ] , index);
           
    app.use(['/categories'] , category);

    // 404 route
    app.use( function( req , res , next) {
        console.log(req.url);
         res.render('404.html');
    })

    // error handling
    app.use( (err , req , res , next) => {
        res.send(err.stack);
    })




}