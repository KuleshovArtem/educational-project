 const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    nav: false,
    controls: false,
    // responsive: {
    //     992: {
    //       edgePadding: 20,
    //       gutter: 20,
    //       items: 1
    //     },
    //   }
  });

  document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    