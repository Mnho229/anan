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
  $("#b-header-1").animateCss('fadeInDownBig', false);
  $("#b-header-2").animateCss('fadeInLeftBig', false);
  $("#b-header-3").animateCss('fadeInUpBig', false);
  $("#black-screen").animateCss('fadeOut', true);
  $("#header-4").animateCss('fadeIn', false);

  //scroll
  var iScrollPos = 0;
  /*
  $(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();

    if (iCurScrollPos > iScrollPos) {

      $('body')

      $('html, body').animate({
        scrollTop: $(".second-contain").offset().top
      }, 1500);
    }
    else {

      $('html, body').animate({
        scrollTop: $(".first-contain").offset().top
      }, 2000);
    }

    iScrollPos = iCurScrollPos;
  });
  */

  $.scrollify({
    section: ".scro",
    easing: "easeOutExpo",
    scrollSpeed: 1130,
    scrollbars: false,
  });

  if ($(window).width() <= 420)
  {
    $.scrollify.disable();
    $('body, html').css({"overflow": "auto"});
    return;
  }

  $(window).on('mousewheel DOMMouseScroll', function(event){

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

      // scroll up
      $.scrollify.move("#first-contain")
    }
    else {

      // scroll down
      console.log(event.originalEvent.wheelDelta);

      $.scrollify.move("#second-contain");
    }
  });
});