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

// // Scroll
// window.addEventListener('scroll', () => {

//   // console.log('offsetTop', document.querySelector('.services').offsetTop); // 705px верх блока от верха сайта
//   // console.log('clientHeight', document.querySelector('.header').clientHeight); // 172px высота хедера
//   console.log('windowScrollY', window.scrollY); // насколько от верха сайта находиться верх окна

//   document.querySelectorAll('.section').forEach((el, i) => {
//   console.log('Sum', el.offsetTop - document.querySelector('.header').clientHeight);
//     // if (el.offsetTop - document.querySelector('.header').clientHeight - 1000 <= window.scrollY) {
//     // Если начало блока меньше либо равно положению верха окна относительно сайта
//     if (el.offsetTop - document.querySelector('.header').clientHeight <= window.scrollY) {

//       document.querySelectorAll('.nav-link').forEach((el) => {
//         if (el.classList.contains('nav-link--active')) {
//           el.classList.remove('nav-link--active');
//         };
//       });
//       document.querySelectorAll('.nav-item')[i].querySelector('a').classList.add('nav-link--active');
//     };
//   });
// });
