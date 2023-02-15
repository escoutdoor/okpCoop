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

