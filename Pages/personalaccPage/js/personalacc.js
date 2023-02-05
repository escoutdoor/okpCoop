
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


// CLOCK

function RealtimeClock() {
    let clock = new Date();

    let h = clock.getHours()-2;
    let m = clock.getMinutes();
    let s = clock.getSeconds();

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    $('.realClock').html(h + " : " + m + " : " + s);
}

setInterval(() => RealtimeClock(), 1000)
