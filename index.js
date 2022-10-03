//animation trigger 
jQuery(function($) {

  const doAnimations = function() {
    const offset = $(window).scrollTop() + $(window).height();
    const $animatables = $('.animatable');

    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
      $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };

  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});