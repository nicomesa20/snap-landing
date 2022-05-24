const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    console.log('abrio');
    navMenu.classList.add('show-menu');
  });
  navClose.addEventListener('click', () => {
    console.log('cerro');
    navMenu.classList.remove('show-menu');
  });
}
