// Auto-create new intput-groups
$(".js-lists").on("focus", ".disabled", function () {
	var disabledRow = $(".input-group.disabled");
	var newInputGroup = disabledRow.clone()[0];
	disabledRow.removeClass("disabled").addClass("js-create-on-keypress");
	$(".js-lists").one("keypress", ".js-create-on-keypress", function () {
		$(".js-create-on-keypress")
			.removeClass("js-create-on-keypress")
			.after(newInputGroup);
	});
});

// Count the non-blank inputs in each column
// $(".js")
