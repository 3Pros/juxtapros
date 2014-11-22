$(".toggle1").on("click", function() {
	$("#g1").toggleClass("glyphicon-ok");
	$.folded = $(".container").oriDomi({
		hPanels: 6,
		speed: 2000,
	});
	$.folded.foldUp();
	// $("input").toggleClass("js-darkblue");
	// $("html").toggleClass("js-blue");
});
$(".toggle2").on("click", function() {
	$("#g2").toggleClass("glyphicon-ok");


});
$(".toggle3").on("click", function() {
	$("#g3").toggleClass("glyphicon-ok");


});
$("#js-set").on("click", function() {
	$("#js-setme").toggleClass("open");

});
