import initSlider from '../../js/initSlider';

initSlider('.videos__slider', {
  slidesPerView: 1,
  wrapperClass:  'videos__items',
  slideClass:    'videos__item',
  navigation:    {
    prevEl: '.videos__nav--prev',
    nextEl: '.videos__nav--next',
  },
});


$('.cannon').each(( i, el ) => {
  const $img = $(el).find('img');
  const totalImages = $img.length;
  let loaded = 0;

  $(el).find('img').on('load', () => {
    loaded++;
    if (loaded === totalImages) $(el).addClass('cannon--active');
  });
});
