
$('.calcPage__delOpitons__details-item:nth-child(1)>.calcPage__delOpitons__details-item__content>.calcPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.calcPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideToggle();
    $('.calcPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item').addClass('activeitem')
})
$('.calcPage__delOpitons__details-item:nth-child(2)>.calcPage__delOpitons__details-item__content>.calcPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.calcPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideToggle();
    $('.calcPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item').addClass('activeitem')
})
$('.calcPage__delOpitons__details-item:nth-child(3)>.calcPage__delOpitons__details-item__content>.calcPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.calcPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideToggle();
    $('.calcPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideUp();
    $('.calcPage__delOpitons__details-item').addClass('activeitem')
})