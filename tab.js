$('.tab-container').flexslider({
    animation: "slide",
    slideshow: false,
    smoothHeight: true,
    animationSpeed: 500,
    directionNav: false,
    controlsContainer: ".container",
    controlNav: true,
    manualControls: ".tab-nav li",
    start: function(){
      $('.tab-container').resize();
    },
  });
  $('.switcher select').change(function(){
    $('.tab-container').flexslider($('option:selected',$(this)).index()-1);
  });
      