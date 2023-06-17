import Swiper from "swiper/bundle";

const swiper = new Swiper('.swiper', {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 100,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
