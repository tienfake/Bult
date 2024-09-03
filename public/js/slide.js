var GUI = {
  slideService: () => {
    if (document.querySelector(".dichVuLK")) {
      var swiper = new Swiper(".dichVuLK", {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

        },
      });
    }
  },

  slideBottom: () => {
    if (document.querySelector(".slideBottom")) {
      var swiper = new Swiper(".slideBottom", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
      });
    }
  },
  slideNews: () => {
    if (document.querySelector(".slideNews")) {
      var swiper = new Swiper(".slideNews", {
        slidesPerView: 2.3,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  },

  slideServiceCT: () => {
    if (document.querySelector(".dichVuCT")) {
      var swiper = new Swiper(".dichVuCT", {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 4,
            spaceBetween: 20,
          },

        },
      });
    }
  },
  init: () => {
    GUI.slideService();
    GUI.slideBottom();
    GUI.slideNews();
    GUI.slideServiceCT();
    
  },
};
document.addEventListener("DOMContentLoaded", () => {
  GUI.init();
});
