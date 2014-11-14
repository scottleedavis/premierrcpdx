// Retrieve
function getResults(type,callback){
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(process.env.MONGOLAB_URI, function(err, db) {
        if(!err) {
            db.collection(type, function(err, collection){
                collection.find().toArray(function(err,docs){
                    callback(err,docs);
                });
            });
        }
    });
}

exports.index = function(req, res) {
    var resp = {
        offroad: null,
        onroad: null,
        oval: null
    };
    getResults( 'offroad',function(err,offroad_docs){
        resp.offroad = offroad_docs;
        getResults( 'onroad',function(err,onroad_docs){
            resp.onroad = onroad_docs;
            getResults( 'oval',function(err,oval_docs){
                resp.oval = oval_docs;
                res.send(resp);
            });
        });
    });
};
 