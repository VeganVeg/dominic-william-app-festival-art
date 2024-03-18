const likeButton = document.querySelector(".like-button");
const heart = document.querySelector(".bi-heart-fill");

if (document.querySelector(".like-button") !== null) {
  likeButton.addEventListener("click", function () {
    likeButton.classList.add("liked-btn");
    heart.classList.add("liked-heart");
  });
}

const swiperPhone = new Swiper(".screenshots", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 1,
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
