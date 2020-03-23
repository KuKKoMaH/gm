import initSlider from '../../js/initSlider';

initSlider('.coursesReasons__slider', {
  slidesPerView: 1,
  spaceBetween:  30,
  wrapperClass:  'coursesReasons__items',
  slideClass:    'coursesReasons__item',
  navigation:    {
    prevEl: '.coursesReasons__nav--prev',
    nextEl: '.coursesReasons__nav--next',
  },
}, { sm: true, md: true, lg: false, });
