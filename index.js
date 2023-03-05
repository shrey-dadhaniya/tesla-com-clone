(function () {
  document.querySelector('.header__menu_mobile>*').addEventListener('click', toggleModel);
  document.querySelector('.close_button').addEventListener('click', toggleModel);
  function toggleModel() {
    const isOpen = document.querySelector('body').classList.contains('open-mobile-menu');
    if (isOpen) {
      document.querySelector('body').classList.remove('open-mobile-menu');
    } else {
      document.querySelector('body').classList.add('open-mobile-menu');
    }
  }
})();
