$(".js-lists").on("focus", ".disabled", function () {
	newRow = $(this).clone();
	$(this).removeClass("disabled");
	$(this).one("keypress", function () {
		$(this).after(newRow);
	});
});
