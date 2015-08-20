var app = app || {};

$(document).ready(function() {
	app.currentSection = 1;
	app.nextSection = 2;
	app.lastScrollTop = 0;
	// $('h1').append('jQuery is in this bitch!');
	$(window).on('scroll', function() {
		st = $(window).scrollTop();
		console.log('lastScrollTop= ' + app.lastScrollTop + ' ---- st= ' + st);
		if (st >= app.lastScrollTop) {
			console.log('scrolling down');
			app.sectionDistance = $(".row-" + app.nextSection.toString()).offset().top;
			scrollingDown = true;
		} else {
			console.log('scrolling up');
			app.sectionDistance = $('.row-' + (app.currentSection - 1).toString()).offset().top;
			scrollingDown = false;
		}
		app.lastScrollTop = st;
		
		$('html, body').animate({
			scrollTop: app.sectionDistance
		}, 1000, 'swing', function() {
			if (scrollingDown) {
				app.nextSection ++;
				app.currentSection ++;
			} else {
				app.nextSection --;
				app.currentSection --;
			}
			console.log("Next Section = " + app.nextSection + " ----- Current Section = " + app.currentSection);
			$('html, body').stop(true);
		});

	});
});