$(function(){
  // cache the window object
  $window = $(window);

  $('[data-type="background"]').each(function(){
   // declare the variable to affect the defined data-type
   var $scroll = $(this);

    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards
      var yPos = parseInt(-($window.scrollTop() / $scroll.data('speed')));

      // background position
      var coords = '50% '+ yPos + 'px';

      // move the background
      $scroll.css({ backgroundPosition: coords });
    }); // end window scroll
  });  // end section function

  $('body').scrollspy({ target: '.navbar', offset:$(".navbar").height()});
  var setScrollSpy = function(){
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh');
    });
  };
  //$(window).resize(setScrollSpy);
  setScrollSpy();

  $('ul.navbar-nav > li > a').smoothScroll({
    offset: -$("#navigation").height()
  });

  // Fix navigation.
  $('#navigation').fixedonlater();


  /*
  *   Global variables.
  */
  var pageHeight = $(window).height();
  var pageWidth = $(window).width();
  var navigationHeight = $("#navigation").outerHeight();

  /*
  *   ON RESIZE, check again
  */
  $(window).resize(function () {
      pageWidth = $(window).width();
      pageHeight = $(window).height();
  });
})
