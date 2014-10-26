//read from yml file into json...

YAML = require('yamljs');

exports.index = function(req, res) {
    var nativeObject = YAML.load('./routes/results_store.yml');
    res.send(nativeObject);
};
 