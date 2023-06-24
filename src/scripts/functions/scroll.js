// Scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('.header').clientHeight - 1000 <= window.scrollY) {
      document.querySelectorAll('.nav-link').forEach((el) => {
        if (el.classList.contains('nav-link--active')) {
          el.classList.remove('nav-link--active');
        };
      });
      document.querySelectorAll('.nav-item')[i].querySelector('a').classList.add('nav-link--active');
    };
  });
  if (document.querySelectorAll('.section')[0].offsetTop - document.querySelector('.header').clientHeight > window.scrollY) {
    if(document.querySelector('.nav-link--active')) {
      document.querySelector('.nav-link--active').classList.remove('nav-link--active');
    };
  };
});
