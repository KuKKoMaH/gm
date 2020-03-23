import initSlider from '../../js/initSlider';

const $items = $('.coursesProgram__item');
$items.on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  $items.removeClass('coursesProgram__item--active');
  $el.addClass('coursesProgram__item--active');
  $el.css('z-index', $items.length);
  let i = $items.length;
  let $cursor = $el;
  while ($cursor.length) {
    $cursor.css('z-index', i--);
    $cursor = $cursor.prev();
  }

  i = $items.length;
  $cursor = $el;
  while ($cursor.length) {
    $cursor.css('z-index', i--);
    $cursor = $cursor.next();
  }
});

initSlider('.coursesProgram__slider', {
  slidesPerView:  'auto',
  centeredSlides: true,
  wrapperClass:   'coursesProgram__items',
  slideClass:     'coursesProgram__item',
  navigation:     {
    prevEl: '.coursesProgram__nav--prev',
    nextEl: '.coursesProgram__nav--next',
  },
}, { sm: true, md: true, lg: false });
