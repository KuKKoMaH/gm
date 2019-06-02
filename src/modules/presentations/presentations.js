import initSlider from '../../js/initSlider';

initSlider('.presentations__slider', {
  slidesPerView: 1,
  wrapperClass:  'presentations__items',
  slideClass:    'presentations__item',
  navigation:    {
    prevEl: '.presentations__nav--prev',
    nextEl: '.presentations__nav--next',
  },
});
