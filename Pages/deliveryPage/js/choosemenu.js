let country = document.getElementById('placeholder__inst')
let countryMenu = document.getElementById('chooseMenu__calc');

country.onclick = function() {
    countryMenu.classList.toggle('activeMenu');
    country.classList.toggle('activeCountry');
    servicesMenu.classList.remove('activeMenuServ');
    servicesTitle.classList.remove('activeServ');
}



let servicesTitle = document.getElementById('placeholder__instNew')
let servicesMenu = document.getElementById('chooseMenu__calcPlus');

servicesTitle.onclick = function() {
    servicesMenu.classList.toggle('activeMenuServ');
    servicesTitle.classList.toggle('activeServ');
    countryMenu.classList.remove('activeMenu');
    country.classList.remove('activeCountry');
}



// COUNTER

let dataObject = {
    obj1: {
        country: '',
        town: '',
        index: Number,
        weight: Number,
        options: ''
    }
}

$('.chooseMenu__calc-item').click(function() {
    $('#chooseMenu__calc').removeClass('activeMenu');
})

$('.chooseMenu__calc-itemAdd').click(function() {
    $('#chooseMenu__calcPlus').removeClass('activeMenuServ')
})


//COUNTRY

$(".chooseMenu__calc-item:nth-child(1)").click(function() {
    $(".placeholder__item").attr("value", "Украина");
    $('.placeholder__item:text').attr('placeholder','Украина');
})
$(".chooseMenu__calc-item:nth-child(2)").click(function() {
    $(".placeholder__item").attr("value", "США");
    $('.placeholder__item:text').attr('placeholder','США');
})
$(".chooseMenu__calc-item:nth-child(3)").click(function() {
    $(".placeholder__item").attr("value", "Великобритания");
    $('.placeholder__item:text').attr('placeholder','Великобритания');
})
$(".chooseMenu__calc-item:nth-child(4)").click(function() {
    $(".placeholder__item").attr("value", "Португалия");
    $('.placeholder__item:text').attr('placeholder','Португалия');
})
$(".chooseMenu__calc-item:nth-child(5)").click(function() {
    $(".placeholder__item").attr("value", "Испания");
    $('.placeholder__item:text').attr('placeholder','Испания');
})

// OPTIONS

$(".chooseMenu__calc-itemAdd:nth-child(1)").click(function() {
    $(".placeholder__itemOpt").attr("value", "Скорость доставки");
    $('.placeholder__itemOpt:text').attr('placeholder','Скорость доставки');
})
$(".chooseMenu__calc-itemAdd:nth-child(2)").click(function() {
    $(".placeholder__itemOpt").attr("value", "Хрупкий товар");
    $('.placeholder__itemOpt:text').attr('placeholder','Хрупкий товар');
    $('.placeholder__itemOpt:text').addClass
})
$(".chooseMenu__calc-itemAdd:nth-child(3)").click(function() {
    $(".placeholder__itemOpt").attr("value", "Доп уповка");
    $('.placeholder__itemOpt:text').attr('placeholder','Доп уповка');
})
$(".chooseMenu__calc-itemAdd:nth-child(4)").click(function() {
    $(".placeholder__itemOpt").attr("value", "Гарантия доставки");
    $('.placeholder__itemOpt:text').attr('placeholder','Гарантия доставки');
})

$(".calculator__button").click(function() {
    let inputTown = $(".inputInfoDel__town").val();
    let inputIndex = $(".inputInfoDel__index").val();
    let inputWeight = $(".inputInfoDel__weight").val();
    let inputCountry = $('.placeholder__item').val();
    let inputOptions = $('.placeholder__itemOpt').val()
    dataObject.obj1.town = inputTown;
    dataObject.obj1.index =  inputIndex;
    dataObject.obj1.weight = inputWeight;
    dataObject.obj1.country = inputCountry;
    dataObject.obj1.options = inputOptions;

    if(!inputCountry) {alert("Выберите пожалуйста страну адресата")}
    else if(!inputWeight) {alert("Введите пожалуйста предварительный вес посылки")} 
    else if(!inputTown) {alert("Введите пожалуйста город адресата")}
    else if(!inputIndex) {alert("Введите пожалуйста индекс адресата")}

    function counter(obj) {
        let result = 0;
        if(obj.country == "Украина") {
            return result = 5000;
        } else if(obj.country == "США") {
            return result = 10000;
        }else if(obj.country == "Великобритания") {
            return result = 1000;
        }else if(obj.country == "Португалия") {
            return result = 3000;
        }else if(obj.country == "Испания") {
            return result = 2000;
        }

    }
    alert(`Приблезительная стоимость доставки адресату - ${counter(dataObject.obj1)}$`);
})



