$( ".sortable" ).sortable({
	axis : "y",
	items: "div:not(.disabled)",
	handle: "span.input-group-addon",
	update: function(event, ui) {
		recomputeTabIndices();
	},
});
// $( ".sortable" ).disableSelection();
