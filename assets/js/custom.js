

$(document).ready(function(){
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/defensx_test/assets/animations/DefensX_Side_BY_Side_Animation_V2.json'
  });
});

$(document).ready(function(){
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container-mobile'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/defensx_test/assets/animations/DefensX_Mobile_Animation_V2.json'
  });
});


$(document).ready(function(){
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


$(document).ready(function(){
  var owl = $('.brands-carousel-7');
  owl.owlCarousel({
    items: 5,
    loop:true,
    autoplay:true,
    navBy: 1,
    nav:false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 4000,
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

$(document).ready(function(){
  var owl = $('.brands-carousel-8');
  owl.owlCarousel({
    items: 5,
    loop:true,
    autoplay:true,
    navBy: 1,
    nav:false,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 4000,
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


document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
  dropdown.addEventListener('click', function (e) {
    // Tıklanan menüye 'show' sınıfı ekleyerek alt menüyü göster
    this.classList.toggle('show');

    // İkonu tıklanarak döndürme
    const icon = this.querySelector('.dropdown-icon');
    if (icon) {
      icon.classList.toggle('rotate'); // İkonu döndür
    }
  });
});

 