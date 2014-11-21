function handleDragStart(e) {
	this.style.opacity = "0.4";  // this / e.target is the source node.
	//console.log("We are dragging something.");
}

$(".column").on("dragstart", handleDragStart);
		//[].forEach.call(cols, function(col) {
		//col.addEventListener("dragstart", handleDragStart, false);
		//});
