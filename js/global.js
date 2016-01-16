// 4D 69 6C 6E  4C 74 64
// =================================================================
// 		Miln Ltd
// 			Digital Experiences
// 		Global Javascript Functions
// =================================================================

$(function() {


  	$(document).on( "click", ".language-selected", function() {
  		$('.dropdown').toggleClass('active');
  		$(this).toggleClass('active');
	});

  	$('body').singlePageNav({
  		offset: $('header').outerHeight()
  	});

  	// Scroll baby yeah 

  	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
        $('.home-triangle').css({'opacity':(( 1000-scroll )/1000)});
    });
 
});

