import initSlider from '../../js/initSlider';

initSlider('.coursesChannels__slider', {
  slidesPerView: 'auto',
  wrapperClass:  'coursesChannels__items',
  slideClass:    'coursesChannels__item',
  navigation:    {
    prevEl: '.coursesChannels__nav--prev',
    nextEl: '.coursesChannels__nav--next',
  },
});
