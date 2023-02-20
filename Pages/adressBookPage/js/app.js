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

// INPUTS

let surname = document.getElementById('surname');
let name = document.getElementById('name');
let country = document.getElementById('country');
let region = document.getElementById('region');
let district = document.getElementById('district');
let city = document.getElementById('city');
let street = document.getElementById('street');
let building = document.getElementById('building');
let flat = document.getElementById('flat');
let index = document.getElementById('index');
let phone = document.getElementById('phone');

let button = document.getElementById('saveButton')


button.onclick = function() {

    if(!name.value) {
        openAlert();
        name.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!surname.value) {
        openAlert();
        surname.style.border = '1px solid rgba(255,153,153, .7)';
    }
    if(!country.value) {
        openAlert();
        country.style.border = '1px solid rgba(255,153,153, .7)';
    }
    if(!region.value) {
        openAlert();
        region.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!district.value) {
        openAlert();
        district.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!city.value) {
        openAlert();
        city.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!street.value) {
        openAlert();
        street.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!building.value) {
        openAlert();
        building.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!flat.value) {
        openAlert();
        flat.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!index.value) {
        openAlert();
        index.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!phone.value) {
        openAlert();
        phone.style.border = '1px solid rgba(255,153,153, .7)';
    } 



    let data = new WeakMap();
    data.set(name, name.value);
    data.set(surname, surname.value);
    data.set(country, country.value);
    data.set(region, region.value);
    data.set(district, district.value);
    data.set(city, city.value);
    data.set(street, street.value);
    data.set(building, building.value);
    data.set(flat, flat.value);
    data.set(index, index.value);
    data.set(phone, phone.value);



    console.log(data.get(name));
    console.log(data.get(surname));
    console.log(data.get(country));
    console.log(data.get(region));
    console.log(data.get(district));
    console.log(data.get(city));
    console.log(data.get(street));
    console.log(data.get(building));
    console.log(data.get(flat));
    console.log(data.get(index));
    console.log(data.get(phone));



    if(name.value) {
        name.style.border = '1px solid #C0C9D7';
    } 
    if(surname.value) {
        surname.style.border = '1px solid #C0C9D7';
    }
    if(country.value) {
        surname.style.border = '1px solid #C0C9D7';
    }
    if(region.value) {
        region.style.border = '1px solid #C0C9D7';
    } 
    if(district.value) {
        district.style.border = '1px solid #C0C9D7';
    } 
    if(city.value) {
        city.style.border = '1px solid #C0C9D7';
    } 
    if(street.value) {
        street.style.border = '1px solid #C0C9D7';
    } 
    if(building.value) {
        building.style.border = '1px solid #C0C9D7';
    } 
    if(flat.value) {
        flat.style.border = '1px solid #C0C9D7';
    } 
    if(index.value) {
        index.style.border = '1px solid #C0C9D7';
    } 
    if(phone.value) {
        phone.style.border = '1px solid #C0C9D7';
    }


}

// OPEN BLOCK 2

let openBlockBtn = document.getElementById('openBlockBtn')
let secondBlock = document.getElementById('secondBlock')
let closeBlockBtn = document.getElementById('closeBlockBtn')

openBlockBtn.onclick = function() {
    secondBlock.classList.remove('invisible');
    closeBlockBtn.onclick = function() {
        secondBlock.classList.add('invisible');
    }
}

// INPUTS 2

let secondRegion = document.getElementById('secondRegion');
let secondDistrict = document.getElementById('secondDistrict');
let secondCity = document.getElementById('secondCity');
let secondStreet = document.getElementById('secondStreet');
let secondBuilding = document.getElementById('secondBuilding');
let secondFlat = document.getElementById('secondFlat');
let secondIndex = document.getElementById('secondIndex');

let secondButton = document.getElementById('secondSaveButton')


secondButton.onclick = function() {

    if(!secondRegion.value) {
        openAlert();
        secondRegion.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondDistrict.value) {
        openAlert();
        secondDistrict.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondCity.value) {
        openAlert();
        secondCity.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondStreet.value) {
        openAlert();
        secondStreet.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondBuilding.value) {
        openAlert();
        secondBuilding.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondFlat.value) {
        openAlert();
        secondFlat.style.border = '1px solid rgba(255,153,153, .7)';
    } 
    if(!secondIndex.value) {
        openAlert();
        secondIndex.style.border = '1px solid rgba(255,153,153, .7)';
    } 



    let secondData = new WeakMap();
    secondData.set(secondRegion, secondRegion.value);
    secondData.set(secondDistrict, secondDistrict.value);
    secondData.set(secondCity, secondCity.value);
    secondData.set(secondStreet, secondStreet.value);
    secondData.set(secondBuilding, secondBuilding.value);
    secondData.set(secondFlat, secondFlat.value);
    secondData.set(secondIndex, secondIndex.value);



    console.log(secondData.get(secondRegion));
    console.log(secondData.get(secondDistrict));
    console.log(secondData.get(secondCity));
    console.log(secondData.get(secondStreet));
    console.log(secondData.get(secondBuilding));
    console.log(secondData.get(secondFlat));
    console.log(secondData.get(secondIndex));



    if(secondRegion.value) {
        secondRegion.style.border = '1px solid #C0C9D7';
    } 
    if(secondDistrict.value) {
        secondDistrict.style.border = '1px solid #C0C9D7';
    } 
    if(secondCity.value) {
        secondCity.style.border = '1px solid #C0C9D7';
    } 
    if(secondStreet.value) {
        secondStreet.style.border = '1px solid #C0C9D7';
    } 
    if(secondBuilding.value) {
        secondBuilding.style.border = '1px solid #C0C9D7';
    } 
    if(secondFlat.value) {
        secondFlat.style.border = '1px solid #C0C9D7';
    } 
    if(secondIndex.value) {
        secondIndex.style.border = '1px solid #C0C9D7';
    }

}


// ALERT

let newAlert = document.getElementById('alert');
let closeBtn = document.getElementById('closeBtn');

function openAlert() {
    newAlert.classList.add("opened");
}

closeBtn.onclick = function() {
    newAlert.classList.remove("opened");
}