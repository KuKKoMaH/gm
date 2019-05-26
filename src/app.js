import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'selectize';
// import 'slick-carousel';
import SmoothScroll from 'smooth-scroll';

import './js/init';
import './modules/header/header';
import './modules/frontHero/frontHero';
import './modules/team/team';
import './modules/problems/problems';
import './modules/progress/progress';
import './modules/clients/clients';
import './modules/services/services';
import './modules/videos/videos';
import './modules/test/test';
import './modules/map/map';

$('select').selectize({
  maxItems: 1,
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.popup__opener').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  $.magnificPopup.open({ type: 'inline', items: { src: $(e.delegateTarget).attr('href') } });
  return false;
});

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container', });
