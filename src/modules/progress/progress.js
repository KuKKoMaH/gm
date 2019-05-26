import initSlider from '../../js/initSlider';

initSlider('.progress__slider', {
  slidesPerView: 'auto',
  // spaceBetween:  35,
  wrapperClass:  'progress__items',
  slideClass:    'progress__item',
  freeMode:      true,
  scrollbar:     {
    el:        '.progress__scrollbar',
    dragClass: 'progress__drag',
    dragSize:  25,
  },
});
