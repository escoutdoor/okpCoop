// RealTime clock

let time = document.querySelector('.realClock')

function realTime() {
    let clock = new Date();

    let h = clock.getHours()-2;
    let m = clock.getMinutes();
    let s = clock.getSeconds();

    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    time.innerHTML = h + " : " + m + " : " + s;
}

realTime();
setInterval(() => realTime(), 1000);

//Navigation slider

let slideritm1 = document.querySelector('.filt-slider__item1');
let slideritm2 = document.querySelector('.filt-slider__item2');

slideritm1.classList.add('active');

slideritm1.onclick = () => {
    slideritm1.classList.add('active');
    slideritm2.classList.remove('active')
}

slideritm2.onclick = () => {
    slideritm2.classList.add('active');
    slideritm1.classList.remove('active')
}


// reload butt

const relbutt = document.querySelector('#search__butt');

relbutt.onclick = () => {
    window.location.reload();
}


// checkbox

let mntcheck = document.querySelector('#month__check');

let filtmenu = document.querySelector('#filtmnh'); //filt input month


mntcheck.setAttribute('checked', '')
filtmenu.setAttribute('readonly', '')

mntcheck.onclick = () =>{
    mntcheck.checked = true;
    filtmenu.disabled = false;
    dtcheck.checked = true;
    disDT.checked = false;
    firstDateInput.disabled = false;
    secondDateInput.disabled = false;
}


// filter menu month


let monthDrop = document.getElementById("moth__dropmenu");


filtmenu.onclick = () => {
    monthDrop.classList.toggle('activeMenu');
    filtmenu.classList.toggle('no-border');
}


let monthItem1 = document.querySelector('.moth__dropmenu-item1');
let monthItem2 = document.querySelector('.moth__dropmenu-item2');
let monthItem3 = document.querySelector('.moth__dropmenu-item3');
let monthItem4 = document.querySelector('.moth__dropmenu-item4');

monthItem1.onclick = () => {
    filtmenu.placeholder = "Этот месяц"
    monthDrop.classList.remove('activeMenu');
    filtmenu.classList.toggle('no-border');
}

monthItem2.onclick = () => {
    filtmenu.placeholder = "Январь"
    monthDrop.classList.remove('activeMenu');
    filtmenu.classList.toggle('no-border');
}

monthItem3.onclick = () => {
    filtmenu.placeholder = "Апрель"
    monthDrop.classList.remove('activeMenu');
    filtmenu.classList.toggle('no-border');
}

monthItem4.onclick = () => {
    filtmenu.placeholder = "Сентябрь"
    monthDrop.classList.remove('activeMenu');
    filtmenu.classList.toggle('no-border');
}



// filter date

let dtcheck = document.getElementById('date__check');
let firstDateInput = document.getElementById('date__firstB');
let secondDateInput = document.getElementById('date__secondB');

firstDateInput.setAttribute('disabled', '');
secondDateInput.setAttribute('disabled', '');

dtcheck.onclick = () => {
    firstDateInput.disabled = false;
    secondDateInput.disabled = false;
    disDT.checked = false;
    mntcheck.checked = true;
    filtmenu.disabled = false;
}


// date disable

let disDT = document.getElementById('wodate');

disDT.onclick = () => {
    dtcheck.checked = false;
    mntcheck.checked = false;
    monthDrop.classList.remove('activeMenu');
    filtmenu.setAttribute('disabled', '');
}


// reset butt 

let resetBtn = document.querySelector('.reset__butt');

resetBtn.onclick = () => {
    window.location.reload();
}


// Оплатить кнопка

let butIT = document.querySelector('.buyit__butt')
let modalBack = document.querySelector('.notification-buy');

let modalIn = document.querySelector('.notification-buy__inside')
let modalCross = document.querySelector('#cancelButt');

butIT.addEventListener('click', () => {
    modalBack.classList.add('activeBuy');
    modalIn.classList.add('activeBuy');
    document.body.classList.add('max')
})

modalCross.addEventListener('click', () => {
    modalBack.classList.remove('activeBuy');
    modalIn.classList.remove('activeBuy');
    document.body.classList.remove('max')
})

modalBack.addEventListener('click', () => {
    modalBack.classList.remove('activeBuy');
    modalIn.classList.remove('activeBuy');
    document.body.classList.remove('max')
})


// BUY IT methods

let visa = document.getElementById('visaradio');
let pay = document.getElementById('paypalradio');
let confirm_btn = document.getElementById('connectwu');

let newAlert = document.getElementById('alert');
let closeBtn = document.querySelector('#closeBtn')
let txtAlert = document.querySelector('.alert-content > p');

confirm_btn.addEventListener('click', () => {
    if(visa.checked) {
        newAlert.classList.add("opened");
        txtAlert.innerHTML = "visa card";
        newAlert.style.backgroundColor = '';
        newAlert.style.borderColor = ''
    } 
    if(pay.checked) {
        newAlert.classList.add("opened");
        txtAlert.innerHTML = "paypal card";
        newAlert.style.backgroundColor = '';
        newAlert.style.borderColor = ''
    }
    if(!pay.checked && !visa.checked) {
        newAlert.classList.add("opened");
        txtAlert.innerHTML = "Choose a payment method";
        newAlert.style.backgroundColor = '#e16867';
        newAlert.style.borderColor = '#d72f2f'
    }
})

closeBtn.addEventListener('click', () => {
    newAlert.classList.remove("opened");
})