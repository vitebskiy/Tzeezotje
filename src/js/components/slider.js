import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 60,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next, custom-button-next',
    prevEl: '.swiper-button-prev, custom-button-prev',
  },
});
