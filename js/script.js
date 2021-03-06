const burger = document.querySelector('.header__burger'),
      asideMenu = document.querySelector('.aside-menu'),
      asideMenuClose = document.querySelector('.aside-menu__close'),
      overlay = document.querySelector('.overlay'),
      BtnMore = document.querySelector('.catalog__more'),
      modalClose = document.querySelectorAll('.modal__close'),
      modalConsultation = document.querySelector('[data-consultation="consultation"]'),
      modalOrder = document.querySelector('[data-order="order"]'),
      catalogBtn = document.querySelectorAll('.catalog-item__btn');

$('.promo-slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slideToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/header/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>',
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            arrows: false,
          }
        }
      ]

});

$('.reviews__slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slideToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: '<button type="button" class="slick-next"><img src="../img/header/next.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/header/previos.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
              centerPadding: '350px',
              slidesToShow: 1,
              variableWidth: false,
            }
        },

        {
            breakpoint: 1200,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slideToScroll: 1,
                variableWidth: false,
            }
        },

      ]

});

$('.questions__item-title').on('click', function(e){
    $(this).toggleClass('questions__item-title--active');
    $(this).next().slideToggle('200'); // ?????????? ???????????? ????????  ???????????????? ?? ???????????????????? ?????? ?????????? ???? ?????????? ???? ???????????? ???????????????? ??????????????
    if($(this).next().css('display') == 'block') {
        $(this).next().css('display', 'flex');
        $(this).next().css('display', 'flex');

    };
});

$('.catalog__tab ').on('click', function(e){
    e.preventDefault();
    $($(this).siblings()).removeClass('catalog__tab--active');
    $(this).addClass('catalog__tab--active');
    $(".catalog__content").removeClass('catalog__content--active');
    $($(this).attr('href')).addClass('catalog__content--active');
});

burger.addEventListener('click',()=>{
    asideMenu.classList.toggle('aside-menu--active');
    overlay.style.display = "block";
});   

asideMenuClose.addEventListener('click',()=>{
    asideMenu.classList.toggle('aside-menu--active');
    overlay.style.display = "none";
});

BtnMore.addEventListener('click',()=>{
    modalConsultation.style.display = "block";
    overlay.style.display = "block";
});

overlay.addEventListener('click',()=>{
    if(asideMenu.classList.length == 1){
        modalOrder.style.display = "none";
        modalConsultation.style.display = "none";
        overlay.style.display = "none";
    }
});

catalogBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        modalOrder.style.display = "block"
        overlay.style.display = "block";
    });
});

modalClose.forEach((item)=>{
    item.addEventListener('click',()=>{
        modalOrder.style.display = "none";
        modalConsultation.style.display = "none";
        overlay.style.display = "none"; 
    });
});


window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 10){
        $('.header__inner').css("background-color", "rgba(0,0,0,0.6)")
    }
    else {
        $('.header__inner').css("background-color", "unset")
    }
})