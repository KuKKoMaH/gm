import Swiper from 'swiper';

const $wrapper = $('.logotypes__slider');
if ($wrapper.length) {
  const slider = new Swiper('.logotypes__slider', {
    slidesPerView:        'auto',
    spaceBetween:         16,
    loop:                 true,
    loopAdditionalSlides: 5,
    breakpoints:          {},
    speed:                10000,
    centeredSlides:       true,
    autoplay:             {
      delay:                0,
      disableOnInteraction: false,
      // waitForTransition:    false,
    },
    wrapperClass:         'logotypes__items',
    slideClass:           'logotypes__item',
    // navigation:           {
    //   prevEl: '.logotypes__nav--prev',
    //   nextEl: '.logotypes__nav--next',
    // },
  });
}
