$(document).ready(function(){
	$("#button").click(function() {
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?";
		console.log("fots urjc");
		$.getJSON( flickerAPI, {
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				if ( i === 15 ) {
			        return false;
				}
	      	});
	    });
	});

	$("#button2").click(function() {
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + $("#search").val() + "&tagmode=any&format=json&jsoncallback=?";
		console.log("fots urjc2");
		$.getJSON( flickerAPI, {
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				if ( i === 15 ) {
			        return false;
				}
	      	});
	    });
	});
});