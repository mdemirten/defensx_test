

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
    autoplayTimeout: 5000,
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
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 4000,
    rtl: true,
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


document.addEventListener("DOMContentLoaded", function() {
  // Lozad.js ile lazy load'u başlatıyoruz
  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('fade');  // İçeriği yükledikten sonra fade efekti ekle
    }
  });
  observer.observe();

  // İlk başta ilk 6 blog yazısı görünsün
  const blogPosts = document.querySelectorAll('.blog-post');
  const loadMoreButton = document.getElementById('load-more');
  let visibleCount = 6;  // İlk başta 6 öğe görünsün

  // İlk başta yalnızca 6 öğe görünür olacak
  blogPosts.forEach((post, index) => {
    if (index < visibleCount) {
      post.classList.add('visible');
    } else {
      post.classList.remove('visible');
    }
  });

  // "See More" butonuna tıklanınca yeni öğeler gösterilecek
  loadMoreButton.addEventListener('click', function() {
    const hiddenPosts = document.querySelectorAll('.blog-post:not(.visible)');

    // Yeni öğeler gösteriliyor
    hiddenPosts.forEach((post, index) => {
      if (index < 6) {  // Her tıklamada 6 öğe göster
        post.classList.add('visible');
      }
    });

    // Eğer daha fazla gizli öğe yoksa butonu gizle
    if (document.querySelectorAll('.blog-post:not(.visible)').length === 0) {
      loadMoreButton.style.display = 'none'; // Buton kaybolacak
    }
  });
});





function scrollToMiddle() {
  const scrollContainer = document.querySelector('.scroll-container');
  const middleBox = document.querySelector('.scroll-container .two');
  if (scrollContainer && middleBox) {
    const offset = middleBox.offsetLeft - (scrollContainer.offsetWidth / 2) + (middleBox.offsetWidth / 2);
    scrollContainer.scrollLeft = offset;
  }
}