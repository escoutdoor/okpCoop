
const progressItem1 = $('.persAcc__data-details__slider-nav:nth-child(1)');
const progressItem2 = $('.persAcc__data-details__slider-nav:nth-child(2)');
const progressItem3 = $('.persAcc__data-details__slider-nav:nth-child(3)');

progressItem1.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(1)').show( "slow");
    $('.persAcc__data-details__sliderItem:nth-child(2)').hide( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(3)').hide( "slow", "linear" );
})
progressItem2.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(2)').show( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(1)').hide( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(3)').hide( "slow", "linear" );
})
progressItem3.click(function() {
    $('.persAcc__data-details__sliderItem:nth-child(3)').show( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(1)').hide( "slow", "linear" );
    $('.persAcc__data-details__sliderItem:nth-child(2)').hide( "slow", "linear" );
})