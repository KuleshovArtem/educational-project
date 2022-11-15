$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/arrow-right.svg"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
            },
            // {
            // breakpoint: 600,
            // settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            // }
            // },
            // {
            // breakpoint: 480,
            // settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            // }
            // }
            // // You can unslick at a given breakpoint now by adding:
            // // settings: "unslick"
            // // instead of a settings object
        ]
      });
  });
      