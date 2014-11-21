// Auto-create new rows
$(".js-lists").on("focus", ".disabled", function () {
	newRow = $(this).clone();
	$(this).removeClass("disabled");
	$(this).one("keypress", function () {
		$(this).after(newRow);
	});
});

// Count the non-blank inputs in each column
// $(".js")
