import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import scriptLoader from './js/scriptLoader';
// import 'selectize';

scriptLoader('https://polyfill.io/v3/polyfill.min.js?features=Promise%2CIntersectionObserver', () => {
  require('./js/init');
  require('./js/cartsList');
  require('./js/initAbandonPopup');
  require('./js/popups');
  require('./js/paroller');
  require('./js/tabs');
  require('./js/saveUTM');
  require('./modules/header/header');
  require('./modules/team/team');
  require('./modules/problems/problems');
  require('./modules/progress/progress');
  require('./modules/clients/clients');
  require('./modules/services/services');
  require('./modules/videos/videos');
  require('./modules/test/test');
  require('./modules/map/map');
  require('./modules/contacts/contacts');
  require('./modules/images/images');
  require('./modules/logotypes/logotypes');
  require('./modules/presentations/presentations');
  require('./modules/siteTypes/siteTypes');
  require('./modules/smmHero/smmHero');
  require('./modules/contextHero/contextHero');
  require('./modules/related/related');
  require('./modules/instruments/instruments');
  require('./modules/seoPrice/seoPrice');
  require('./modules/coursesTarget/coursesTarget');
  require('./modules/coursesChannels/coursesChannels');
  require('./modules/coursesReasons/coursesReasons');
  require('./modules/coursesPrices/coursesPrices');
  require('./modules/coursesProgram/coursesProgram');
  require('./modules/coursesTeachers/coursesTeachers');
  require('./modules/coursesTestimonials/coursesTestimonials');
  require('./modules/coursesFaq/coursesFaq');
  require('./modules/blogSingle/blogSingle');
  require('./modules/case/case');
  require('./modules/smmProcess/smmProcess');
  require('./modules/about/about');
  require('./js/lazyImages');
  if (window.ON_READY) setTimeout(window.ON_READY);
});
