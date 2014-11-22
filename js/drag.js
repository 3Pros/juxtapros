    $( ".sortable" ).sortable({
    	axis : "y",
    	items: "div:not(.disabled)",
    	// cancel: ".disabled",
    });
    $( ".sortable" ).disableSelection();
