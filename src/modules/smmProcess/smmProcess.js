const audio = $('.smmProcess__audio')[0];
const $button = $('.smmProcess__button');
let isPlaying = false;

if (audio) {
  audio.onplay = () => {
    isPlaying = true;
    $button.addClass('smmProcess__button--play');
  };
  audio.onpause = () => {
    isPlaying = false;
    $button.removeClass('smmProcess__button--play');
  };

  $button.on('click', () => {
    isPlaying ? audio.pause() : audio.play();
  });

}
