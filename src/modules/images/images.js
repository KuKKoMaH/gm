import { Swiper } from 'swiper/dist/js/swiper.esm.js';


const $wrapper = $('.images__slider');
if ($wrapper.length) {
  const slider = new Swiper('.images__slider', {
    slidesPerView:                  6,
    spaceBetween:                   0,
    loop:                           true,
    speed:                          10000,
    preventInteractionOnTransition: true,
    autoplay:                       {
      delay:                0,
      disableOnInteraction: false,
    },
    breakpoints:                    {
      1200: {
        slidesPerView: 4,
      },
      767:  {
        slidesPerView: 2,
      },
    },

    wrapperClass: 'images__items',
    slideClass:   'images__item',
  });
  // window.slider = slider;

  setInterval(() => {
    for (let i = 0; i < slider.length; i++) {
      const s = slider[i];
      s.autoplay.run();
    }
  }, 1000);
}
