function recomputeTabIndices() {
	if (!$("input").length) {
		return false;
	}
	$("input")[0].tabIndex = 1;
	$("input")[1].tabIndex = 2;

	var nextIndex = 3;
	var lists = $(".js-list")
	var indexGap = lists.toArray().length;

	lists.each(function (index, element) {
		$("input", element).each(function (i, elem) {
			elem.tabIndex = nextIndex + i*indexGap;
		});
		++nextIndex;
	});
};

recomputeTabIndices();
