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



// DROPDOWN BLOCK

block1 = document.getElementById("mainItem1")
button1 = document.getElementById("openBtn1");
dropdownBlock1 = document.getElementById("dropdownBlock1");

secondBlock = document.getElementById("mainItem2")
secondButton = document.getElementById("openBtn2");
secondDropdownBlock = document.getElementById("dropdownBlock2");

thirdBlock = document.getElementById("mainItem3")
thirdButton = document.getElementById("openBtn3");
thirdDropdownBlock = document.getElementById("dropdownBlock3");

fourthBlock = document.getElementById("mainItem4")
fourthButton = document.getElementById("openBtn4");
fourthDropdownBlock = document.getElementById("dropdownBlock4");


button1.onclick = function() {
    dropdownBlock1.classList.toggle("opened");
    button1.classList.toggle("rotated");
    block1.classList.toggle("newBorder");

    secondDropdownBlock.classList.remove("opened");
    secondButton.classList.remove("rotated");
    secondBlock.classList.remove("newBorder");
    thirdDropdownBlock.classList.remove("opened");
    thirdButton.classList.remove("rotated");
    thirdBlock.classList.remove("newBorder");
    fourthDropdownBlock.classList.remove("opened");
    fourthButton.classList.remove("rotated");
    fourthBlock.classList.remove("newBorder");
}

secondButton.onclick = function() {
    secondDropdownBlock.classList.toggle("opened");
    secondButton.classList.toggle("rotated");
    secondBlock.classList.toggle("newBorder");

    dropdownBlock1.classList.remove("opened");
    button1.classList.remove("rotated");
    block1.classList.remove("newBorder");
    thirdDropdownBlock.classList.remove("opened");
    thirdButton.classList.remove("rotated");
    thirdBlock.classList.remove("newBorder");
    fourthDropdownBlock.classList.remove("opened");
    fourthButton.classList.remove("rotated");
    fourthBlock.classList.remove("newBorder");
}

thirdButton.onclick = function() {
    thirdDropdownBlock.classList.toggle("opened");
    thirdButton.classList.toggle("rotated");
    thirdBlock.classList.toggle("newBorder");

    dropdownBlock1.classList.remove("opened");
    button1.classList.remove("rotated");
    block1.classList.remove("newBorder");
    secondDropdownBlock.classList.remove("opened");
    secondButton.classList.remove("rotated");
    secondBlock.classList.remove("newBorder");
    fourthDropdownBlock.classList.remove("opened");
    fourthButton.classList.remove("rotated");
    fourthBlock.classList.remove("newBorder");
}

fourthButton.onclick = function() {
    fourthDropdownBlock.classList.toggle("opened");
    fourthButton.classList.toggle("rotated");
    fourthBlock.classList.toggle("newBorder");

    dropdownBlock1.classList.remove("opened");
    button1.classList.remove("rotated");
    block1.classList.remove("newBorder");
    secondDropdownBlock.classList.remove("opened");
    secondButton.classList.remove("rotated");
    secondBlock.classList.remove("newBorder");
    thirdDropdownBlock.classList.remove("opened");
    thirdButton.classList.remove("rotated");
    thirdBlock.classList.remove("newBorder");
}