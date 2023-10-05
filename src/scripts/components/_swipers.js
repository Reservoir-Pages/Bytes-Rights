import Swiper from "swiper/bundle";

const teamSwiper = new Swiper(".team-swiper", {
  slidesPerView: 3,
  spaceBetween: 100,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const webinarSwiper = new Swiper(".webinar-swiper", {
  slidesPerView: 2,
  spaceBetween: 150,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
