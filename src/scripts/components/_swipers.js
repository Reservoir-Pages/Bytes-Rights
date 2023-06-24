import Swiper from "swiper/bundle";

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 100,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
