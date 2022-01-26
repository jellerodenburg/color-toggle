// HTML elements
const btnToggleMenu = document.querySelector(".btn-toggle-menu");
const sidebar = document.querySelector(".nav-sidebar");
const sidebarUl = document.querySelector(".nav-sidebar ul");
const sidebarTitle = document.querySelector(".nav-sidebar span");
const sidebarList = document.querySelectorAll(".nav-sidebar li");
const body = document.querySelector("body")
const greyBackground = document.querySelector(".grey-background")
const redBackground = document.querySelector(".red-background")
const greenBackground = document.querySelector(".green-background")
const blueBackground = document.querySelector(".blue-background")
const yellowBackground = document.querySelector(".yellow-background")
const main = document.querySelector("main")
const colorButton1 = document.querySelector("#colorButton1")
const colorButton2 = document.querySelector("#colorButton2")
const colorButton3 = document.querySelector("#colorButton3")
const colorButton4 = document.querySelector("#colorButton4")
const colorButton5 = document.querySelector("#colorButton5")

// Function for opening and closing the menu
let toggleNavStatus = false;
let toggleNav = function () {
    if (toggleNavStatus === false) closeNav();
    else openNav();
}


// EventListeners for opening the menu while hovering hamburger-button or nav-sidebar
btnToggleMenu.addEventListener("mouseover", function () { toggleNav() });
btnToggleMenu.addEventListener("mouseout", function () { toggleNav() });
sidebar.addEventListener("mouseover", function () { toggleNav() });
sidebar.addEventListener("mouseout", function () { toggleNav() });


// Set color functions
const setGrey = function () {
    body.className = "grey-background";
    main.innerHTML = "Home";
    colorButton1.checked = true;
}
const setRed = function () {
    body.className = "red-background";
    main.innerHTML = "Rood";
    colorButton2.checked = true;
}
const setGreen = function () {
    body.className = "green-background";
    main.innerHTML = "Groen";
    colorButton3.checked = true;
}
const setBlue = function () {
    body.className = "blue-background";
    main.innerHTML = "Blauw";
    colorButton4.checked = true;
}
const setYellow = function () {
    body.className = "yellow-background";
    main.innerHTML = "Geel";
    colorButton5.checked = true;
}


// Set background color by clicking menu items
greyBackground.addEventListener("click", function () { setGrey() })
redBackground.addEventListener("click", function () { setRed() })
blueBackground.addEventListener("click", function () { setBlue() })
greenBackground.addEventListener("click", function () { setGreen() })
yellowBackground.addEventListener("click", function () { setYellow() })


// Set background color using the keyboard (keys 1 to 5)
document.addEventListener('keydown', function (event) {
    if (event.key == 1) {
        setGrey();
    }
    else if (event.key == 2) {
        setRed();
    }
    else if (event.key == 3) {
        setGreen();
    }
    else if (event.key == 4) {
        setBlue();
    }
    else if (event.key == 5) {
        setYellow();
    }
});


function openNav() {
    sidebar.style.width = "0";
    sidebarTitle.style.opacity = "0";

    let arrayLength = sidebarList.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarList[i].style.opacity = "0";
    }

    sidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
}

function closeNav() {
    sidebarUl.style.visibility = "visible";
    sidebar.style.width = "200px";
    sidebarTitle.style.opacity = "0.5";

    let arrayLength = sidebarList.length;
    for (let i = 0; i < arrayLength; i++) {
        sidebarList[i].style.opacity = "1";
    }

    toggleNavStatus = true;
}

