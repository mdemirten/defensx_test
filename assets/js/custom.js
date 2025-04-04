

  $(document).ready(function(){
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/animations/DefensX_Side_BY_Side_Animation.json'
  });
});

$(document).ready(function(){
  "use strict";

  var owl = $('.brands-carousel-6');
  owl.owlCarousel({
    items: 5,
    loop:true,
    autoplay:true,
    navBy: 1,
    nav:false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    responsive:{
      0:{
        items:2
      },
      550:{
        items:3
      },
      767:{
        items:3
      },
      768:{
        items:5
      },
      991:{
        items:6
      },				
      1000:{
        items:6
      }
    }
});

  (function ($) {
    carousels();
  })(jQuery);
});
