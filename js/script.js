$(document).ready(function(){
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        cssEase: 'ease',
      });

      // counter up code
      
      $('.counter-count').counterUp({
        delay: 10,
        time: 3000
    });

    // review slide code

    $('.review-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: false,
      prevArrow: '.left',
      nextArrow: '.right',

    });
})