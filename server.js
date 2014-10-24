__ = require('underscore');

var express = require('express'),
      races = require('./routes/race_results'),
 

var app = express();
app.use(express.bodyParser());


app.use("/", express.static(__dirname + '/public'));

require('express-debug')(app, {/* settings */});

app.get('/races', races.index);
app.post('/races', races.post);
app.get('/races/:id', races.get);
app.put('/races/:id', races.put);
app.delete('/races/:id', races.delete);


app.listen(3000);
console.log('Listening on port 3000...');