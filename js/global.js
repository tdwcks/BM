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

  	$('header').singlePageNav({
  		offset: $('header').outerHeight()
  	});
 
});

