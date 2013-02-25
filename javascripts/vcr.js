$(document).ready(function(){

	//VCR.JS//
	$window = $(window);
                
   $('body').each(function(){
                    
		$(window).scroll(function() {

			var yPos = (Math.round(($window.scrollTop() * 100) / 1080) * 1080);
			var coords = '0% -'+ yPos + 'px';

			$('body').css({ backgroundPosition: coords });
		});
	});

  //DEMO
  $('#bottom').click(function(){
 	$('#main').addClass('content-fixed');
  $('html, body').stop(true).animate({scrollTop:$(document).height()}, 4000);
    $('html, body').animate({scrollTop: 0 }, 0, function() {
    	$('#main').removeClass('content-fixed');
    });
  });
    
  //LAST COMMIT
  var data = $.getJSON('https://api.github.com/repos/julianmaunder/vcr-js/commits');
 		$('#date').text((data.commit[1].author.date));
  });

});