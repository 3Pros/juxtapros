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

$(".js-lists").on("keypress", recountTotals);

// Count the non-blank inputs in each column
function recountTotals () {
	$(".js-listcount").each(function (index, element) {
		var count = 0;
		$("input", $(".js-list").get(index)).each(function (i, el) {
			if (el.value) {
				++count;
				console.log("Count is " + count);
			}
		})
		$(element).text(count);
	})
}
