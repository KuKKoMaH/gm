import Swiper      from 'swiper';
import Breakpoints from 'breakpoints-js';

const $wrapper = $('.logotypes__slider');
if ($wrapper.length) {
  let slider = null;

  const initSlider = () => {
    if (slider) return;
    slider = new Swiper('.logotypes__slider', {
      slidesPerView: 2,
      spaceBetween:  16,
      wrapperClass:  'logotypes__items',
      slideClass:    'logotypes__item',
      navigation: {
        prevEl: '.logotypes__nav--prev',
        nextEl: '.logotypes__nav--next',
      },
    });
  };

  const destroySlider = () => {
    if (!slider) return;
    slider.destroy();
    slider = null;
  };

  Breakpoints.on('sm', 'enter', () => {
    initSlider();
  });
  Breakpoints.on('md', 'enter', () => {
    destroySlider();
  });
  Breakpoints.on('lg', 'enter', () => {
    destroySlider();
  });
}
