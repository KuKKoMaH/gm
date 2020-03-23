import initSlider from '../../js/initSlider';

initSlider('.seoPrice__slider', {
  slidesPerView: 1,
  wrapperClass:  'seoPrice__items',
  slideClass:    'seoPrice__item',
  navigation:    {
    prevEl: '.seoPrice__nav--prev',
    nextEl: '.seoPrice__nav--next',
  },

});
