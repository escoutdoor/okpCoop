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


// INPUTS

let trackNum = document.getElementById('trackNum');
let orderPrice = document.getElementById('orderPrice');
let shopName = document.getElementById('shopName');

let button = document.getElementById('sendBtn')


button.onclick = function() {
    if(!trackNum.value) {
        openAlert();
        trackNum.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!orderPrice.value) {
        openAlert();
        orderPrice.style.border = '1px solid rgba(255,153,153, .7)';
    }
    if(!shopName.value) {
        openAlert();
        shopName.style.border = '1px solid rgba(255,153,153, .7)';
    }

    let data = new WeakMap();
    data.set(trackNum, trackNum.value);
    data.set(orderPrice, orderPrice.value);
    data.set(shopName, shopName.value);

    console.log(data.get(trackNum));
    console.log(data.get(orderPrice));
    console.log(data.get(shopName));

    if(trackNum.value) {
        trackNum.style.border = '1px solid #C0C9D7';
    } 
    if(orderPrice.value) {
        orderPrice.style.border = '1px solid #C0C9D7';
    }
    if(shopName.value) {
        shopName.style.border = '1px solid #C0C9D7';
    }

    if(trackNum.value && orderPrice.value && shopName.value) {
        button.setAttribute('data-toggle', 'modal')
    } else if(!trackNum.value || !orderPrice.value || !shopName.value) {
        button.removeAttribute('data-toggle', 'modal')
    }
}



// ALERT

let newAlert = document.getElementById('alert');
let closeBtn = document.getElementById('closeBtn');

function openAlert() {
    newAlert.classList.add("opened");
    setTimeout(() => newAlert.classList.remove("opened"), 2000)
}

closeBtn.onclick = function() {
    newAlert.classList.remove("opened");
}