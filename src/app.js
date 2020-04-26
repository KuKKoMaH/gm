import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
// import 'selectize';

import './js/init';
import './js/cartsList';
import './js/initAbandonPopup';
import './js/popups';
import './js/paroller';
// import './js/smoke';
import './js/tabs';
import './js/saveUTM';
import './modules/header/header';
import './modules/team/team';
import './modules/problems/problems';
import './modules/progress/progress';
import './modules/clients/clients';
import './modules/services/services';
import './modules/videos/videos';
import './modules/test/test';
import './modules/map/map';
import './modules/contacts/contacts';
import './modules/images/images';
import './modules/logotypes/logotypes';
import './modules/presentations/presentations';
import './modules/siteTypes/siteTypes';
import './modules/smmHero/smmHero';
import './modules/contextHero/contextHero';
import './modules/related/related';
import './modules/instruments/instruments';
import './modules/seoPrice/seoPrice';
import './modules/coursesTarget/coursesTarget';
import './modules/coursesChannels/coursesChannels';
import './modules/coursesReasons/coursesReasons';
import './modules/coursesPrices/coursesPrices';
import './modules/coursesProgram/coursesProgram';
import './modules/coursesTeachers/coursesTeachers';
import './modules/coursesTestimonials/coursesTestimonials';
import './modules/coursesFaq/coursesFaq';
import './modules/blogSingle/blogSingle';
import './modules/case/case';
import './modules/smmProcess/smmProcess';
import './modules/about/about';

import './js/lazyImages';

// $('select').selectize({ maxItems: 1, });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container', });


const $viewport = document.getElementById('viewport');
$(window).on('resize', () => {
  $viewport.setAttribute('content', screen.width <= 520
    ? 'width=520, user-scalable=no'
    : 'width=device-width, user-scalable=no',
  );
});
