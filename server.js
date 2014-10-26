__ = require('underscore');

var express = require('express'),
      races = require('./routes/race_results');
 

var app = express();
app.use(express.bodyParser());


app.use("/", express.static(__dirname + '/public'));

//require('express-debug')(app, {/* settings */});

app.get('/races', races.index);

app.listen(3000);
console.log('Listening on port 3000...');