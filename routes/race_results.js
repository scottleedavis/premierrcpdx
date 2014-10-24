//read from yml file into json...

// var beer_store = [
//   {
//     id: 0,
//     name: 'Epic IPA',
//     percentage: 11.0
//   },
//   {
//     id: 1,
//     name: 'Oakshire Ride Your Bike',
//     percentage: 8.6
//   },
//   {
//     id: 2,
//     name: 'Vertigo Friar Mikes IPA',
//     percentage: 6.1
//   },
//   {
//     id: 3,
//     name: 'Ninkasi Tricerahops IPA',
//     percentage: 8.8
//   },
//   {
//     id: 4,
//     name: 'Caldera Oatmeal Stout',
//     percentage: 7.2
//   }
// ];

exports.index = function(req, res) {
    // res.send(beer_store);
};
 
exports.post = function(req, res) {
    // var beer = req.body;
    // beer['id'] = __.last(beer_store).id+1;
    // beer_store.push(beer);
    // res.send(beer);
};

exports.get = function(req, res) {
    // var id = req.params.id;
    // var result = __.find(beer_store, function(s){
    //     return s.id.toString() === id;
    // });
    // res.send(result);
};
 
exports.put = function(req, res) {
    // var id = req.params.id;
    // var beer = req.body;
    // beer.id = parseInt(id);
    // var result = __.find(beer_store, function(s){
    //     return s.id.toString() === req.params.id;
    // });
    // if( result ){
    //     result.name = beer.name;
    //     result.percentage = beer.percentage;
    // }
    // res.send(result);
};

exports.delete = function(req, res) {
    // var id = parseInt(req.params.id);
    // var beer = __.findWhere(beer_store, {id: id})
    // beer_store = __.without(beer_store, beer);
    // res.send(beer);
};