$('.delPage__delOpitons__details-item:nth-child(1)>.delPage__delOpitons__details-item__content>.delPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.delPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideToggle();
    $('.delPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item').addClass('activeitem')
})
$('.delPage__delOpitons__details-item:nth-child(2)>.delPage__delOpitons__details-item__content>.delPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.delPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideToggle();
    $('.delPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item').addClass('activeitem')
})
$('.delPage__delOpitons__details-item:nth-child(3)>.delPage__delOpitons__details-item__content>.delPage__delOptions__contentPrice>.delOptions__arrowButton').click(function() {
    $('.delPage__delOpitons__details-item:nth-child(3)>.delOptions__dropDown').slideToggle();
    $('.delPage__delOpitons__details-item:nth-child(1)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item:nth-child(2)>.delOptions__dropDown').slideUp();
    $('.delPage__delOpitons__details-item').addClass('activeitem')
})