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

firstItem.onclick = function() {
    text.innerHTML = 'Владос'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}

secondItem.onclick = function() {
    text.innerHTML = 'Ксюша'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}

thirdItem.onclick = function() {
    text.innerHTML = 'Ванек'
    menu.classList.remove('opened')
    openBlock.classList.remove('border')
}