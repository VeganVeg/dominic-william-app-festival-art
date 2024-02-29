
const swiperFilters = new Swiper('.swiper-filters', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10
})


const swiperArtworks = new Swiper('.swiper-featured-artworks', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10
})

const likeButton = document.querySelector('.like-button');
const heart = document.querySelector('.bi-heart-fill');

likeButton.addEventListener('click', function(){
    likeButton.classList.add('liked-btn');
    heart.classList.add('liked-heart');
});
