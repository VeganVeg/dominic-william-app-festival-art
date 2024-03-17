const likeButton = document.querySelector(".like-button");
const heart = document.querySelector(".bi-heart-fill");

if (document.querySelector(".like-button") !== null) {
  likeButton.addEventListener("click", function () {
    likeButton.classList.add("liked-btn");
    heart.classList.add("liked-heart");
  });
}

const swiperPhone = new Swiper(".screenshots", {
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 70,
  coverflowEffect: {
    rotate: 30,
    stretch: 1,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  /*loop: true,
  effect: "shadow",
  slidesPerView: 3,
  spaceBetween: 10,
  shadow: {
    slidesShadow: true,
  },
   breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
      slideShadows: true,
    },
  },*/
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

const swiperFilters = new Swiper(".swiper-filters", {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 10,
});

const swiperArtworks = new Swiper(".swiper-featured-artworks", {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 10,
});
