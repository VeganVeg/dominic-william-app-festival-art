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
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesCentered: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
