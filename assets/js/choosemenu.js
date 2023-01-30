let country = document.getElementById('placeholder__inst')
let countryMenu = document.getElementById('chooseMenu__delivery');

country.onclick = function() {
    countryMenu.classList.toggle('activeMenu');
    country.classList.toggle('activeCountry');
    servicesMenu.classList.remove('activeMenuServ');
    servicesTitle.classList.remove('activeServ');
}

let crItem = document.querySelectorAll('chooseMenu__delivery-item');


let servicesTitle = document.getElementById('placeholder__instNew')
let servicesMenu = document.getElementById('chooseMenu__deliveryPlus');

servicesTitle.onclick = function() {
    servicesMenu.classList.toggle('activeMenuServ');
    servicesTitle.classList.toggle('activeServ');
    countryMenu.classList.remove('activeMenu');
    country.classList.remove('activeCountry');
}