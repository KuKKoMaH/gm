import initSlider from '../../js/initSlider';

initSlider('.test__slider', {
  slidesPerView: 1,
  wrapperClass:  'test__items',
  slideClass:    'test__item',
  navigation:    {
    prevEl: '.test__nav--prev',
    nextEl: '.test__nav--next',
  },
});
