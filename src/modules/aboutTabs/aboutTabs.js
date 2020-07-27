const $body = $('body');
const $headersContainer = $('.aboutTabs__headers');
const $headers = $('.aboutTabs__header');
const $items = $('.aboutTabs__item');
const headerContainerActiveClass = 'aboutTabs__headers--active';
const headerActiveClass = 'aboutTabs__header--active';
const bodyActiveClass = 'aboutTabs__item--active';

$headers.on('click', ( e ) => {
  const $header = $(e.delegateTarget);
  const index = $header.index();
  const $item = $items.eq(index);

  if ($header.hasClass(headerActiveClass)) {
    setTimeout(() => {
      $headersContainer.addClass(headerContainerActiveClass);
      const clickAside = ( e ) => {
        $body.off('click', clickAside);
        $headersContainer.removeClass(headerContainerActiveClass);
      };
      $body.on('click', clickAside);
    });
  }

  $headers.removeClass(headerActiveClass);
  $items.removeClass(bodyActiveClass);
  $header.addClass(headerActiveClass);
  $item.addClass(bodyActiveClass);
});

