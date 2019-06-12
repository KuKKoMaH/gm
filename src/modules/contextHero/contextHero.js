const $main = $('.contextHero__image');

if ($main.length) {
  window.contextHero = () => requestAnimationFrame(() => {
    if ($main.data('loaded')) {
      $('.contextHero__wave').addClass('contextHero__wave--active');
    }
  });
  contextHero();
}