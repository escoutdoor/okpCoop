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

// DROPDOWN MENU

let menu = document.getElementById('firstInputBlock')

openBlock.onclick = function() {
    menu.classList.toggle('opened')
    openBlock.classList.toggle('border')
}

item1.onclick = function() {
    text.innerHTML = 'Владос'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}

item2.onclick = function() {
    text.innerHTML = 'Ксюша'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}

item3.onclick = function() {
    text.innerHTML = 'Ванек'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}


let menu2 = document.getElementById('secondInputBlock')

secondOpenBlock.onclick = function() {
    menu2.classList.toggle('opened')
    secondOpenBlock.classList.toggle('border')
}

secondItem1.onclick = function() {
    secondText.innerHTML = 'Владос'
    menu2.classList.remove('opened')
    secondOpenBlock.classList.remove('border')
}

secondItem2.onclick = function() {
    secondText.innerHTML = 'Ксюша'
    menu2.classList.remove('opened')
    secondOpenBlock.classList.remove('border')
}

secondItem3.onclick = function() {
    secondText.innerHTML = 'Ванек'
    menu2.classList.remove('opened')
    secondOpenBlock.classList.remove('border')
}


let menu3 = document.getElementById('thirdInputBlock')

thirdOpenBlock.onclick = function() {
    menu3.classList.toggle('opened')
    thirdOpenBlock.classList.toggle('border')
}

thirdItem1.onclick = function() {
    thirdText.innerHTML = 'Владос'
    menu3.classList.remove('opened')
    thirdOpenBlock.classList.remove('border')
}

thirdItem2.onclick = function() {
    thirdText.innerHTML = 'Ксюша'
    menu3.classList.remove('opened')
    thirdOpenBlock.classList.remove('border')
}

thirdItem3.onclick = function() {
    thirdText.innerHTML = 'Ванек'
    menu3.classList.remove('opened')
    thirdOpenBlock.classList.remove('border')
}

// MODAL

sendBtn.onclick = function(event) {
    modal.classList.add('opened')
}

closeBlock.onclick = function() {
    modal.classList.remove('opened')
}

