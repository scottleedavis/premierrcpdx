(function(){
    
    console.log('results loading...');
    
    $ = jQuery;
    $.getJSON( "../vids/", function( data ) {
    
        console.log('loaded results.');

        var items = [];
        var template = _.template(
            $( "script.template" ).html()
        );

        _.each( data, function(video){
            $( "#videos-list" ).append(
                template({
                    comment: video.comment,
                    link: video.link
                })
            );   
        });
    });
    
})();