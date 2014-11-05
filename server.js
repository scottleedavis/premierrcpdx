__ = require('underscore');

var express = require('express')
var app = express(),
      races = require('./routes/race_results'),
      vids = require('./routes/videos');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));

app.get('/races', races.index);
app.get('/vids', vids.index);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

