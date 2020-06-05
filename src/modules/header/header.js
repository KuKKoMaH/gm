/* ================================================ */
/* Меню */
/* ================================================ */
const $menu = $('.menu');
const $menuTrigger = $('.header__button--menu, .menu__close');
// const $menuContent = $('.menu__content');
let menuVisible = false;

$menuTrigger.on('click', () => toggleMenu());

function toggleMenu() {
  if (menuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  if (menuVisible) return;
  $menu.addClass('menu--active');
  // $menu.addClass('menu--active');
  // $menuTrigger.addClass('menu__trigger--active');
  //
  // setTimeout(() => {
  //   $menu.addClass('menu--visible');
  menuVisible = true;
  // }, 0);
}

function hideMenu() {
  if (!menuVisible) return;
  $menu.removeClass('menu--active');
  menuVisible = false;
}

// $menu.find('a[href*="#"]').on('click', () => hideMenu());

/* ================================================ */

$('.menu__items a').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  const $sub = $el.parent().find('ul');
  if (!$sub.length) {
    hideMenu();
    return;
  }
  e.preventDefault();
  $menu.find('ul').removeClass('menu__submenu--active');
  $sub.addClass('menu__submenu--active');
  setTimeout(() => $menu.addClass('menu--level2'));
});

$('.menu__back').on('click', ( e ) => {
  e.preventDefault();
  $menu.removeClass('menu--level2');
});
