// Auto-create new intput-groups
$(".js-lists").on("focus", ".disabled", function () {
	var disabledGroups = $(".input-group.disabled");
	var newInputGroupL = disabledGroups.clone()[0];
	var newInputGroupR = disabledGroups.clone()[1];
	disabledGroups.removeClass("disabled").addClass("js-create-on-keypress");
	$(".js-lists").one("keypress", ".js-create-on-keypress", function () {
		$(".js-create-on-keypress")
			.removeClass("js-create-on-keypress");
		$(".js-list-l > div:last-child")
			.after(newInputGroupL);
		$(".js-list-r > div:last-child")
			.after(newInputGroupR);
		recomputeTabIndices();
	});
});

$(".js-lists").on("blur", recountTotals);
$(".js-lists").on("keyup", recountTotals);
$(".js-lists").on("keyup", "input", function (event) {
	var upArrow = 38;
	var downArrow = 40;
	var parent = $(event.target).parent();
	if (event.which == upArrow && parent.prev().length) {
		parent.prev().children("input").focus();
	} else if (event.which == downArrow && parent.next().length) {
		parent.next().children("input").focus();
	}
});

// Count the non-blank inputs in each column
function recountTotals () {
	$(".js-listcount").each(function (index, element) {
		var count = 0;
		$("input", $(".js-list").get(index)).each(function (i, el) {
			if (el.value.trim()) {
				++count;
			}
		})
		$(element).text(count);
	})
}
