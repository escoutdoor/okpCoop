
const progressItem1 = $('.persAcc__data-details__slider-nav:nth-child(1)');
const progressItem2 = $('.persAcc__data-details__slider-nav:nth-child(2)');
const progressItem3 = $('.persAcc__data-details__slider-nav:nth-child(3)');

$('.persAcc__data-details__sliderItem:nth-child(1)').show( "slow");
progressItem1.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(1)').show( "slow");
    $('.persAcc__data-details__sliderItem:nth-child(2)').slideUp( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(3)').slideUp( "slow", "linear" );
    $('.persAcc__data-details__slider-nav:nth-child(1)').css({'border-bottom': '2px solid var(--color-green)', "color": "var(--color-green)"})
    $('.persAcc__data-details__slider-nav:nth-child(2)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)"})
    $('.persAcc__data-details__slider-nav:nth-child(3)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)"})
})
progressItem2.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(2)').slideDown( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(1)').slideUp( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(3)').hide( "slow", "linear" );
    $('.persAcc__data-details__slider-nav:nth-child(2)').css({'border-bottom': '2px solid var(--color-green)', "color": "var(--color-green)"})
    $('.persAcc__data-details__slider-nav:nth-child(1)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)" })
    $('.persAcc__data-details__slider-nav:nth-child(3)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)"})
})
progressItem3.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(3)').slideDown( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(1)').slideUp( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(2)').slideUp( "slow", "linear" );
    $('.persAcc__data-details__slider-nav:nth-child(3)').css({'border-bottom': '2px solid var(--color-green)', "color": "var(--color-green)"})
    $('.persAcc__data-details__slider-nav:nth-child(1)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)"})
    $('.persAcc__data-details__slider-nav:nth-child(2)').css({'border-bottom': '1px solid #222', "color": "var(--color-black)"})
})