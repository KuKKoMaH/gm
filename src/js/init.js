import Breakpoints from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';

Breakpoints({
  sm: {
    min: 0,
    max: 767,
  },
  md: {
    min: 768,
    max: 1199,
  },
  lg: {
    min: 1200,
    max: Infinity,
  },
});

// $('select').selectize({ maxItems: 1, });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container' });


const $viewport = document.getElementById('viewport');
$(window).on('resize', () => {
  $viewport.setAttribute('content', screen.width <= 520
    ? 'width=520, user-scalable=no'
    : 'width=device-width, user-scalable=no',
  );
});

