const likeButton = document.querySelector(".like-button");
const heart = document.querySelector(".bi-heart-fill");

if (document.querySelector(".like-button") !== null) {
  likeButton.addEventListener("click", function () {
    likeButton.classList.add("liked-btn");
    heart.classList.add("liked-heart");
  });
}

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

const swiperPhone = new Swiper(".swiper-screenshots", {
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-befrore",
  },
});
