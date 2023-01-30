function openLoginWindow(){
    let pop_up_login = document.getElementById('pop_up_login');
    pop_up_login.style.display = 'flex';
    setTimeout(windowAppearance, 100);
}
function closeLoginWindow() {
    let pop_up_login = document.getElementById('pop_up_login');
    pop_up_login.style.opacity = '0';
    pop_up_login.style.transition = 'opacity 0.3s linear';
    setTimeout(windowDisappearance, 300);
}

function windowDisappearance() {
    let pop_up_login = document.getElementById('pop_up_login');
    pop_up_login.style.display = 'none';
}

function windowAppearance() {
    let pop_up_login = document.getElementById('pop_up_login');
    pop_up_login.style.opacity = '1';
    pop_up_login.style.transition = 'opacity 0.3s linear';
}