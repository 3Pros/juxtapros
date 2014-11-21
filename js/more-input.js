// Auto-create new intput-groups
$(".js-lists").on("focus", ".disabled", function () {
	var disabledRow = $(".input-group.disabled");
	var newInputGroup = disabledRow.clone()[0];
	disabledRow.removeClass("disabled");
	disabledRow.one("keypress", function () {
		disabledRow.after(newInputGroup);
	});
});

// Count the non-blank inputs in each column
// $(".js")
