//VCR.JS//
$(document).ready(function(){
	$window = $(window);
   $('body').each(function() {
		$(window).scroll(function() {
			var yPos = (Math.round(($window.scrollTop() * 100) / 1080) * 1080);
			var coords = '0% -'+ yPos + 'px';
			$('body').css({ backgroundPosition: coords });
		});
	});
});