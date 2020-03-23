import '../../js/readingtime.min.js';
import getNumEnding from '../../js/getNumEnding';

const minuteEnding = ['минута', 'минуты', 'минут'];

$('.case__items').readingTime({
  success: function ( data ) {
    const minutes = data.eta.minutes + 1;
    $('.blogHeader__time').html('Время чтения: ' + minutes + ' ' + getNumEnding(minutes, minuteEnding));
  },
});
