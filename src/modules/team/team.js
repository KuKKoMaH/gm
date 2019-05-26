import initSlider from '../../js/initSlider';

initSlider('.team__slider', {
  slidesPerView: 'auto',
  spaceBetween:  35,
  wrapperClass:  'team__items',
  slideClass:    'team__slide',
  navigation: {
    nextEl: '.team__arrow',
    // prevEl: '.swiper-button-prev',
  },
});
