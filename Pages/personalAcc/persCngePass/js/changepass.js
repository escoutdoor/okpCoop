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


// Profile

let oldPass = $('#oldPass');
let newPass = $('#newPass');
let newPassAgain = $('#newPassAgain');

const butt = $('.savePass__butt');


function newPassword() {

    butt.click(function() {

        if(!oldPass.val()) {
            alert("Введите старый пароль");
            oldPass.css({'border-color': "rgba(255,153,153, .7)"});
        } else {oldPass.css({'border-color': "#C0C9D7"});}

        if(!newPass.val()) {
            alert("Введите ваш новый пароль");
            newPass.css({'border-color': "rgba(255,153,153, .7)"});
        } else {newPass.css({'border-color': "#C0C9D7"});}

        if(!newPassAgain.val()) {
            alert("Повторите ваш новый пароль");
            newPassAgain.css({'border-color': "rgba(255,153,153, .7)"});
        } else {newPassAgain.css({'border-color': "#C0C9D7"});}

        if(newPass.val() != newPassAgain.val()) {
            alert("Ошибка при введении нового пароля, повторите пожалуйста еще раз")
        }
    })


}



try {
    newPassword();

} catch(err) {

    throw new Error("There is mistake in your function newPass()");
}