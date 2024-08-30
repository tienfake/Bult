var swiper = new Swiper(".dichVuLK", {
  slidesPerView: 4,
  spaceBetween: 7,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 3.5,
      spaceBetween: 7,
    },
    410: {
      slidesPerView: 3.75,
      spaceBetween: 3,
    },
    420: {
      slidesPerView: 4,
      spaceBetween: 7,
    },
  },
});

var swiper = new Swiper(".slideBottom", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
});

var swiper = new Swiper(".slideNews", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
