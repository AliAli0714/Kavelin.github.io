$(document).ready(function(){

	$('.toggle-hamburger').on('click', function (e) {
		e.preventDefault();
		$('.menu').toggleClass('active');
	});

	$('.toggle-hamburger').on('click', function (x) {
		x.preventDefault();
		$('.toggle-hamburger').toggleClass('hamburger');
	});
});