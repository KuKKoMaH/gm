import initSlider from '../../js/initSlider';

initSlider('.related__slider', {
  slidesPerView: 2,
  spaceBetween:  30,
  wrapperClass:  'related__items',
  slideClass:    'related__item',
  navigation:    {
    prevEl: '.related__nav--prev',
    nextEl: '.related__nav--next',
  },
  breakpoints:   {
    767:  {
      slidesPerView: 1,
    },
  },
});
