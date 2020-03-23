import initSlider from '../../js/initSlider';

initSlider('.coursesPrices__slider', {
  slidesPerView:  'auto',
  spaceBetween:   100,
  centeredSlides: true,
  wrapperClass:   'coursesPrices__items',
  slideClass:     'coursesPrices__item',
  navigation:     {
    prevEl: '.coursesPrices__nav--prev',
    nextEl: '.coursesPrices__nav--next',
  },
  breakpoints:    {
    767: {
      spaceBetween: 30,
    },
  },
}, { sm: true, md: true, lg: false });
