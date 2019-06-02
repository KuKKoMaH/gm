import initSlider from '../../js/initSlider';

initSlider('.siteTypes__slider', {
  slidesPerView: 'auto',
  wrapperClass:  'siteTypes__items',
  slideClass:    'siteTypes__item',
  navigation:    {
    nextEl: '.siteTypes__arrow .navBtn',
  },
});
