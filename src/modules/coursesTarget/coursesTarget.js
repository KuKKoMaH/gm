import initSlider from '../../js/initSlider';

initSlider('.coursesTarget__slider', {
  slidesPerView: 1,
  spaceBetween:  30,
  wrapperClass:  'coursesTarget__items',
  slideClass:    'coursesTarget__item',
  navigation:    {
    prevEl: '.coursesTarget__nav--prev',
    nextEl: '.coursesTarget__nav--next',
  },
}, { sm: true, md: true, lg: false, });
