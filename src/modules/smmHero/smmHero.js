const $main    = $('.smmHero__image');
const $rockets = $('.smmHero__rocket--1, .smmHero__rocket--2');

if ($main.length) {
  window.smmHero = () => requestAnimationFrame(() => {
    if ($main.data('loaded') && $rockets.data('loaded')) {
      $rockets.addClass('smmHero__rocket--animate');
    }
  });
  smmHero();
}