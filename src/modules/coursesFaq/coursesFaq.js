const activeClass = 'coursesFaq__item--active';
$('.coursesFaq__header').on('click', function ( e ) {
  var $item = $(e.delegateTarget).parent();
  if ($item.hasClass(activeClass)) {
    $item.find('.coursesFaq__body').css('max-height', 0);
  } else {
    var $text = $item.find('.coursesFaq__inner');
    $item.find('.coursesFaq__body').css('max-height', $text.outerHeight());
  }
  $item.toggleClass(activeClass);
});

// $('.coursesFaq__header').first().click();
