__ = require('underscore');

var express = require('express');
 

var app = express();
app.use(express.bodyParser());


app.use("/", express.static(__dirname + '/public'));

require('express-debug')(app, {/* settings */});


app.listen(3000);
console.log('Listening on port 3000...');