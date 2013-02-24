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

    $('#bottom').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 4000);
        $('html, body').animate({scrollTop: 0 }, 0);
    });
    
});