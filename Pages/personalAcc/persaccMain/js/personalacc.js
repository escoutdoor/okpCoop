
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
RealtimeClock();
setInterval(() => RealtimeClock(), 1000)



// CHANGE 

let name = $('#persAcc__name');
let surName = $('#persAcc__surname');
let address = $('#persAcc__address');
let login = $('#persAcc__login');
let tel = $('#persAcc__tel');
let email = $('#persAcc__email');
let butt = $('.save__butt');

function saveButtoncheck() {

    if(!name.val() && !surName.val()) {
        if(!address.val() && !login.val()) {
            if(!tel.val() && !email.val()) {
                alert("Введите все данные")
                name.css({'border-color': "rgba(255,153,153, .7)"});
                surName.css({'border-color': "rgba(255,153,153, .7)"});
                address.css({'border-color': "rgba(255,153,153, .7)"});
                login.css({'border-color': "rgba(255,153,153, .7)"});
                tel.css({'border-color': "rgba(255,153,153, .7)"});
                email.css({'border-color': "rgba(255,153,153, .7)"});
                return;
            }
        }
    }


    if(!name.val()) {
        alert("Введите имя");
        name.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    } 
    if(!surName.val()) {
        alert("Введите фамилию")
        surName.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    }
    if(!address.val()) {
        alert("Введите адресс")
        address.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    }
    if(!login.val()) {
        alert("Введите ваш логин")
        login.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    } 
    if(!tel.val()) {
        alert("Введите ваш номер телефона")
        tel.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    } 
    if(!email.val()) {
        alert("Введите ваш номер телефона email")
        email.css({'border-color': "rgba(255,153,153, .7)"});
        $(".persAcc__info-sign>input").prop('checked', false);
    }   




    let data = new WeakMap();
    data.set(name, name.val());
    data.set(surName, surName.val());
    data.set(address, address.val());
    data.set(login, login.val());
    data.set(tel, tel.val());
    data.set(email, email.val());

    console.log(data.get(name));
    console.log(data.get(surName));
    console.log(data.get(address));
    console.log(data.get(login));
    console.log(data.get(tel));
    console.log(data.get(email));

    if(name.val()) {
        name.css({'border-color': "#C0C9D7"});
    }
    if(surName.val()) {
        surName.css({'border-color': "#C0C9D7"});
    } 
    if(address.val()) {
        address.css({'border-color': "#C0C9D7"});
    } 
    if(login.val()) {
        login.css({'border-color': "#C0C9D7"});
    } 
    if(tel.val()) {
        tel.css({'border-color': "#C0C9D7"});
    } 
    if(email.val()) {
        email.css({'border-color': "#C0C9D7"});
    }   

}

butt.click(function() {
    try {
        saveButtoncheck();
        if ($(".persAcc__info-sign>input").is(':checked')) { 
            alert("Вы подписались на нашу рассылку")
        }
    } catch(err) {
        throw new Error("Mistake in fucntion which is reading data from Inputs");
    }
})

// ADDING FILE

let buttImg = $('#persAcc__profile-butt');
const img = $('.persAcc__profile>img');

buttImg.change(function(event) {
    var newImage = URL.createObjectURL(event.target.files[0]);
    img.attr('src', newImage)
    console.log(event);
})



