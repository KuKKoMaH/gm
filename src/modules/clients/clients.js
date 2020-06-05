// $('.clients__button').on('click', () => {
//   $('.clients__more').addClass('clients__more--hidden');
//   $('.clients__items--secondary').addClass('clients__items--active');
// });

import { Swiper } from 'swiper/dist/js/swiper.esm.js';

const $wrapper = $('.clients__slider');
if ($wrapper.length) {
  const slider = new Swiper('.clients__slider', {
    slidesPerView:                  'auto',
    spaceBetween:                   0,
    loop:                           true,
    loopAdditionalSlides:           8,
    // loopedSlides:                   8,
    breakpoints:                    {},
    speed:                          10000,
    preventInteractionOnTransition: true,
    autoplay:                       {
      delay:                0,
      disableOnInteraction: false,
    },
    wrapperClass:                   'clients__items',
    slideClass:                     'clients__item',
    lazy:                           true,
    watchSlidesVisibility:          true,
  });
  // window.slider = slider;

  setInterval(() => {
    for (let i = 0; i < slider.length; i++) {
      const s = slider[i];
      // s.autoplay.stop();
      // s.autoplay.start();
      s.autoplay.run();
    }
  }, 1000);
}
