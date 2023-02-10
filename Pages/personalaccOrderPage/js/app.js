// let exactTime = document.getElementById("exactTime");
// let inputBlock = document.getElementById("exactTime");
// function changeWidth() {
//     let valueLength = exactTime.value.length;
//     exactTime.style.width = ((valueLength + 1) * 6) +'px';
// }
// changeWidth();

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