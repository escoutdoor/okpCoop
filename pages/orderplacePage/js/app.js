
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


// main page

let send = document.getElementById('send');
let double = document.getElementById('dblProd');
let add = document.getElementById('addProd');
let save = document.getElementById('saveProd');

let link = document.getElementById('linkpage')


let newAlert = document.getElementById('alert');
let closeBtn = document.querySelector('#closeBtn')
let txtAlert = document.querySelector('.alert-content > p');


// value 

send.addEventListener('click', () => {
    return new Promise((resolve, reject) => {
        let data = new WeakMap();
        if(!link.value) {
            newAlert.classList.add("opened");
            link.classList.add("color")
            txtAlert.innerHTML = "Введите ссылку";
        } else if(link.value){
            data.set(link, link.value);
            link.classList.remove("color")
        }
        if(!nameitm.value) {
            newAlert.classList.add("opened");
            txtAlert.innerHTML = "Введите название товара";
            nameitm.classList.add("color")
        } else if(nameitm.value) {
            data.set(nameitm, nameitm.value);
            nameitm.classList.remove("color")
        }
        if(!amountitm.value) {
            newAlert.classList.add("opened");
            amountitm.classList.add("color")
            txtAlert.innerHTML = "Введите количество";
        }else if(amountitm.value) {
            data.set(amountitm, amountitm.value);
            amountitm.classList.remove("color")
        }
        if(!sizetitm.value) {
            newAlert.classList.add("opened");
            sizetitm.classList.add("color")
            txtAlert.innerHTML = "Введите размер";
        }else if(sizetitm.value) {
            data.set(sizetitm, sizetitm.value);
            sizetitm.classList.remove("color")
        }
        if(!coloritm.value) {
            newAlert.classList.add("opened");
            txtAlert.innerHTML = "Выберите цвет";
        }else if(coloritm.value) {
            data.set(coloritm, coloritm.value);
        }
        if(!priceitm.value) {
            newAlert.classList.add("opened");
            priceitm.classList.add("color")
            txtAlert.innerHTML = "Введите цену";
        }else if(priceitm.value) {
            data.set(priceitm, priceitm.value);
            priceitm.classList.remove("color")
        }

        if(comment.value) {
            data.set(comment, comment.value)
        }

        

        resolve(data);
        if(!data) reject('no info')

        
    }).then(result => console.log(result), reject => console.log(reject))

})

// close alert

closeBtn.addEventListener('click', () => {
    newAlert.classList.remove("opened");
})

// double btn

double.addEventListener('click', () => {
    if(amountitm.value) {
        amountitm.value *= 2;
    }
})

// add btn
let secondB = document.querySelector(".order-content__second");

add.addEventListener('click', () => {
    secondB.classList.toggle('showSecond');
    if (addProd.innerHTML === "Добавить товар") {
        addProd.innerHTML = "Убрать второй";
    } else {
        addProd.innerHTML = "Добавить товар";
    }
})


// second product to order

let send2 = document.getElementById('send2');
let double2 = document.getElementById('dblProd2');
let save2 = document.getElementById('saveProd2');

let link2 = document.getElementById('linkpage2')



send2.addEventListener('click', () => {
    return new Promise((resolve, reject) => {
        let data2 = new WeakMap();
        if(!link2.value) {
            newAlert.classList.add("opened");
            link2.classList.add("color")
            txtAlert.innerHTML = "Введите ссылку";
        } else if(link2.value){
            data2.set(link2, link2.value);
            link2.classList.remove("color")
        }
        if(!nameitm2.value) {
            newAlert.classList.add("opened");
            txtAlert.innerHTML = "Введите название товара";
            nameitm2.classList.add("color")
        } else if(nameitm.value) {
            data2.set(nameitm2, nameitm2.value);
            nameitm2.classList.remove("color")
        }
        if(!amountitm2.value) {
            newAlert.classList.add("opened");
            amountitm2.classList.add("color")
            txtAlert.innerHTML = "Введите количество";
        }else if(amountitm2.value) {
            data2.set(amountitm2, amountitm2.value);
            amountitm2.classList.remove("color")
        }
        if(!sizetitm2.value) {
            newAlert.classList.add("opened");
            sizetitm2.classList.add("color")
            txtAlert.innerHTML = "Введите размер";
        }else if(sizetitm2.value) {
            data2.set(sizetitm2, sizetitm2.value);
            sizetitm2.classList.remove("color")
        }
        if(!coloritm2.value) {
            newAlert.classList.add("opened");
            txtAlert.innerHTML = "Выберите цвет";
        }else if(coloritm2.value) {
            data2.set(coloritm2, coloritm2.value);
        }
        if(!priceitm2.value) {
            newAlert.classList.add("opened");
            priceitm2.classList.add("color")
            txtAlert.innerHTML = "Введите цену";
        }else if(priceitm2.value) {
            data2.set(priceitm2, priceitm2.value);
            priceitm2.classList.remove("color")
        }

        if(comment2.value) {
            data2.set(comment2, comment2.value)
        }

        

        resolve(data2);
        if(!data2) reject('no info')

        
    }).then(result => console.log(result), reject => console.log(reject))

})

// close alert

closeBtn.addEventListener('click', () => {
    newAlert.classList.remove("opened");
})

// double btn

double2.addEventListener('click', () => {
    if(amountitm2.value) {
        amountitm2.value *= 2;
    }
})
