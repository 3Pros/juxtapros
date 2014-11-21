$(".js-lists").on("focus", ".disabled", function () {
	newRow = $(this).clone();
	$(this).removeClass("disabled")
	$(this).after(newRow);
});
