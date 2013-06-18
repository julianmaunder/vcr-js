// VCR.JS
$(document).ready(function(){
  $('body').each(function(){
		$(window).scroll(function() {
			// Store scrollTop value in a variable
			var scrollPos = $(window).scrollTop();
			// Convert scrollTop to a multiple of 1080 (the height of each frame of the animation)
			var yPos = (Math.round((scrollPos * 100) / 1080) * 1080);
			// Store the new background position in a variable
			var coords = '0% -'+ yPos + 'px';
			// Apply new background position
			$('body').css("background-position", coords);
		});
	});
  // Last commit date, message and author
 /* 
 $.getJSON('https://api.github.com/repos/julianmaunder/vcr-js/commits', function(gitData) {
		$('#date').append((gitData[0].commit.author.date) + "<br>BY: " + (gitData[0].commit.author.name) + "<br>\'" + (gitData[0].commit.message) + "'");
	});
});
*/