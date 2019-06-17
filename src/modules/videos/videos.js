import initSlider from '../../js/initSlider';

initSlider('.videos__slider', {
  slidesPerView: 1,
  wrapperClass:  'videos__items',
  slideClass:    'videos__item',
  navigation:    {
    prevEl: '.videos__nav--prev',
    nextEl: '.videos__nav--next',
  },

});

const totalImages = $('.cannon img').length;
let loaded        = false;
window.cannon     = () => {
  loaded++;
  if (loaded === totalImages) $('.cannon').addClass('cannon--active');
};