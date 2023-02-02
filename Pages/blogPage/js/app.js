const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 800,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



swiper.allowTouchMove = false;