$(function() {

  $.scrollify({
    section: ".scro",
    easing: "easeOutExpo",
    scrollSpeed: 1150,
    scrollbars: true,
  });
 
  //add new function for ease of animation
  $.fn.extend({
    animateCss: function (animationName, follow_up) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);

        if (follow_up !== undefined) {
          function second_anim() {
            $(this).animateCss(follow_up);
          }

          setTimeout($.proxy(second_anim, this), 1000);
        }
      });
    }
  });

  //initiate animation of first section
  $("#header-1").animateCss('fadeInDownBig');
  $("#header-2").animateCss('fadeInLeftBig');
  $("#header-3").animateCss('fadeInUpBig');
  $("#header-4").animateCss('fadeInLeftBig');
  $("#contact-us").animateCss('fadeInUpBig');
  $("#march-2017").animateCss('fadeIn');
  $("#down-arrow").animateCss('fadeInUpBig', 'bounce');

  //scroll
  var enableListener = true;

  if ($(window).width() <= 1040)
  {
    $.scrollify.disable();
    $('body, html').css({"overflow": "auto"});
    enableListener = false;
    return;
  }

  $(window).on('mousewheel DOMMouseScroll', function(event){
    if (!enableListener) {
      $(window).off('mousewheel DOMMouseScroll');
      return
    }

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

      // scroll up
      $.scrollify.move("#first-contain")
    }
    else {

      // scroll down

      $.scrollify.move("#second-contain");
    }
  });
});