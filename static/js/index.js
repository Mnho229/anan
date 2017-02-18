$(function() {

  function changeDisplay() {
    $('#black-screen').css({"display": "none"});
  }
 
  //add new function for ease of animation
  $.fn.extend({
    animateCss: function (animationName, display) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        if (!display) {
          $(this).removeClass('animated ' + animationName);
        }
        else {
          setTimeout(changeDisplay, 2000);
        }
      });
    }
  });

  //initiate animation of first section
  $("#header-1").animateCss('fadeInDownBig', false);
  $("#header-2").animateCss('fadeInLeftBig', false);
  $("#header-3").animateCss('fadeInUpBig', false);
  $("#header-4").animateCss('fadeInLeftBig', false);
  $("#contact-us").animateCss('fadeInUpBig', false);
  $("#down-arrow").animateCss('fadeInUpBig', false);

  //scroll
  var enableListener = true;

  $.scrollify({
    section: ".scro",
    easing: "easeOutExpo",
    scrollSpeed: 1150,
    scrollbars: false,
  });

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