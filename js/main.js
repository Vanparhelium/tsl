window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('header__list_visible');
    document.querySelector('#burger').classList.toggle('menu__btn');
    document.querySelector('#burger').classList.toggle('menu__btn-close');
    document.querySelector('.add__ad-menu').classList.toggle('.add__ad-menu_visible');
    });
});
