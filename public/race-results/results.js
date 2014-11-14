(function(){
    
    console.log('results loading...');
    
    $ = jQuery;
    $.getJSON( "../races/", function( data ) {
    
        console.log('loaded results.');
        
        var items = [];
        var template = _.template(
            $( "script.template" ).html()
        );

        var offroad = _.each(data["offroad"], function(item){
            item.type = "Offroad";
        });
        var onroad = _.each(data["onroad"], function(item){
            item.type = "Onroad";
        });
        var oval = _.each(data["oval"], function(item){
            item.type = "Oval";
        });
        
        var races = _.union(offroad, onroad, oval);
        races = _.sortBy(races, function(r){
            return r.date;
        }).reverse();
        
        _.each( races, function(race){
            var date = race.date;
            var type = race.type;
            var file = race.link;
            var filename_chunks = file.split('/');
            var file_name = filename_chunks[filename_chunks.length-1].split('-');
            file_name.shift()
            file_name = file_name.join(' ');

            $( "#results-list" ).append(
                template({
                    type: type,
                    date: date,
                    file: file,
                    file_name: file_name
                })
            );   
        });
    });
    
})();