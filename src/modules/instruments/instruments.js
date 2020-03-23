import initSlider from '../../js/initSlider';

initSlider('.instruments__slider', {
  slidesPerView: 1,
  // spaceBetween:  35,
  wrapperClass:  'instruments__items',
  slideClass:    'instruments__item',
  navigation:    {
    prevEl: '.instruments__nav--prev',
    nextEl: '.instruments__nav--next',
  },
});
