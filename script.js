(function () {

  /** бургер меню и меню навигации*/
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('show');
    body.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('show') && e.target === nav) {
      nav.classList.remove('show');
      burger.classList.remove('active');
    }
    if (e.target.classList.contains('nav__link')) {
      nav.classList.remove('show');
      burger.classList.remove('active');
      body.classList.remove('hidden');
    }
  });

}());
