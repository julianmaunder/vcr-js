$(document).ready(function(){


	// Cache the Window object
	$window = $(window);
                
   $('body').each(function(){
                    
		$(window).scroll(function() {

				var yPos = (Math.round(($window.scrollTop() * 100) / 1080) * 1080);
				var coords = '0% -'+ yPos + 'px';

				$('body').css({ backgroundPosition: coords });
		
		});
	});

  $('#bottom').click(function() {
  	for (var i = 0; i < 100; i++) {
			var yPos = (Math.round((Math.random() * 100) / 1080) * 1080);
			var coords = '0% -'+ yPos + 'px';
			console.log(yPos);
			$('body').css({ backgroundPosition: coords });
		};
	});
});