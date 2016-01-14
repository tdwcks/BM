// 4D 69 6C 6E  4C 74 64
// =================================================================
// 		Miln Ltd
// 			Digital Experiences
// 		Global Javascript Functions
// =================================================================

$('#main').smoothState({
  onStart: {
    // How long this animation takes
    duration: 250,
    // A function that dictates the animations that take place
    render: function ($container) {}
  }
});

$(function() {
    $(".typewriter").typewriter({'speed':100});
  });
