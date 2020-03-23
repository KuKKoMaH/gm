import initSlider from '../../js/initSlider';

initSlider('.coursesTestimonials1__slider', {
  slidesPerView: 1,
  wrapperClass:  'coursesTestimonials1__items',
  slideClass:    'coursesTestimonials1__item',
  navigation:    {
    prevEl: '.coursesTestimonials1__nav--prev',
    nextEl: '.coursesTestimonials1__nav--next',
  },
}, { sm: true, md: true, lg: false });

initSlider('.coursesTestimonials2__slider', {
  slidesPerView: 4,
  spaceBetween:  30,
  wrapperClass:  'coursesTestimonials2__items',
  slideClass:    'coursesTestimonials2__item',
  navigation:    {
    prevEl: '.coursesTestimonials2__nav--prev',
    nextEl: '.coursesTestimonials2__nav--next',
  },
  breakpoints:   {
    1200: {
      slidesPerView:  'auto',
      centeredSlides: true,
    },
    767:  {
      slidesPerView:  'auto',
      centeredSlides: true,
    },
  },
}, { sm: true, md: true, lg: true });
