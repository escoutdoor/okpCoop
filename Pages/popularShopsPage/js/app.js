const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



swiper.allowTouchMove = false;