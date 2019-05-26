import initSlider from '../../js/initSlider';

initSlider('.services__slider', {
  slidesPerView: 1,
  wrapperClass:  'services__items',
  slideClass:    'services__item',
  navigation:    {
    prevEl: '.services__nav--prev',
    nextEl: '.services__nav--next',
  },
});
