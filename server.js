var express = require('express');
var app = express();

// express configuration
require('./express')(app);


app.listen(3000 , () => {
    console.log('Server listing @ port 3000');
})