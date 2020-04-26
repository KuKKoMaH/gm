const $container = $('.about__text');
const $text = $('.about__inner');
const $button = $('.about__button');

if ($container.length) {
  if ($text.height() > $container.height()) {
    $button.addClass('about__button--active');

    $button.on('click', () => {
      $button.removeClass('about__button--active');
      $container.css('max-height', $text.height());
      setTimeout(() => {
        $container.addClass('about__text--full');
      }, 1000);
    });
  }
}
