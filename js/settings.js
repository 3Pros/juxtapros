$(".toggle1").on("click", function() {
	$("#g1").toggleClass("glyphicon-ok");
	$("input").toggleClass("js-darkblue");
	$("html").toggleClass("js-blue");
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