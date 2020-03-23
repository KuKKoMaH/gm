import initSlider from '../../js/initSlider';

initSlider('.coursesTeachers__slider', {
  slidesPerView: 1,
  wrapperClass:  'coursesTeachers__items',
  slideClass:    'coursesTeachers__item',
  navigation:    {
    prevEl: '.coursesTeachers__nav--prev',
    nextEl: '.coursesTeachers__nav--next',
  },
});
