
const swiper = new Swiper('.swiper-filters', {
    slidesPerView:'auto',
})


const likeButton = document.querySelector('.like-button');
const heart = document.querySelector('.bi-heart-fill');

likeButton.addEventListener('click', function(){
    likeButton.classList.add('liked-btn');
    heart.classList.add('liked-heart');
});