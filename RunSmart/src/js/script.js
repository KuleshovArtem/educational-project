window.addEventListener('DOMContentLoaded', () => {
   //Tabs
      
    const tabs = document.querySelectorAll('.catalog__tab');
    const catalog = document.querySelectorAll('.catalog__content');

    function hideTabCatalog () {
        catalog.forEach(item => {
            item.classList.remove('catalog__content_active');
        });
        tabs.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }

    function showTabCatalog (i = 0) {
        catalog[i].classList.add('catalog__content_active');
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabCatalog();
    showTabCatalog();

    tabs.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            const target = event.target;
            
            if(target && target.classList.contains('div')) {
                hideTabCatalog();
                showTabCatalog(i);
            }
            
        });
    });

    //tabs more
    const tabsMore = document.querySelectorAll('.catalog-item__link');
    const tabsBack = document.querySelectorAll('.catalog-item__back');
    const tabsContent = document.querySelectorAll('.catalog-item__content');
    const tabsContentList = document.querySelectorAll('.catalog-item__list');

    
    tabsMore.forEach((item, i) => {
        item.addEventListener('click',(event) => {
            event.preventDefault();
            tabsContentList[i].classList.add('catalog-item__list_active');
            tabsContent[i].classList.remove('catalog-item__content_active');
        });
    });

    tabsBack.forEach((item, i) => {
        item.addEventListener('click',(event) => {
            event.preventDefault();
            tabsContentList[i].classList.remove('catalog-item__list_active');
            tabsContent[i].classList.add('catalog-item__content_active');
            
        });
    });
    
    

});
 
 
 const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    nav: false,
    controls: false,
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
    
(function($) {
$(function() {

    // modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
    
// validate forms
    function validateForms (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },   
                phone: 'required',
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Ввидите минимум {0} символа!")
                } ,
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты. Правильный формат name@domain.ru"
                }
              }
        });
    }
    validateForms('#order form');
    validateForms('#consultation form');
    validateForms('#consultation-form');
    
    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $('form').submit(function (e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        }
        $.ajax({
            type:'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val('');
            $('#order, #consultation').fadeOut();
            $('.overlay, #thanks').fadeIn();

            $('form').trigger('reset');
        });
        return false;
    });

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
        }
    });
   
    
});
})(jQuery);  

new WOW().init();