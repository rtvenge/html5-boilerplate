(function () {
	$('.nav').each(function () {
		var
			nav = $(this),
			menus = nav.find('ul, div'),
			links = nav.find('a');
		// Keeps parent anchors highlighted while hovering menus
		menus.hover(
			function () {
				$(this)
					.parent('li')
					.find('> a')
						.addClass('hover');
			},
			function () {
				$(this)
					.parent('li')
					.find('> a')
						.removeClass('hover');
			}
		);
		// code to get tabbing to work properly
		links
			.blur(function () {
				$(this).parent('li').removeClass('hover');
			})
			.focus(function () {
				$(this).parents('li').addClass('hover');
			});
		// more tabbing code
		nav.find('li:has(ul,div) a:last-child')
			.blur(function () {
				$(this).parents('li').removeClass('hover');
			});
		//signals menus with children
		nav.find('li:has(ul,div)').addClass('children');

	});
})();