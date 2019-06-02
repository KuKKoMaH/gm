import initSlider from '../../js/initSlider';

initSlider('.images__slider', {
  slidesPerView: 4,
  wrapperClass:  'images__items',
  slideClass:    'images__item',
  // loop:          true,
  navigation:    {
    prevEl: '.images__nav--prev',
    nextEl: '.images__nav--next',
  },
  breakpoints:   {
    767: {
      slidesPerView: 2,
    }
  }
});
