// Get HTML elements
const getBtnToggleMenu = document.querySelector(".btn-toggle-menu");
const getSidebar = document.querySelector(".nav-sidebar");
const getSidebarUl = document.querySelector(".nav-sidebar ul");
const getSidebarTitle = document.querySelector(".nav-sidebar span");
const getSidebarLis = document.querySelectorAll(".nav-sidebar li");
const getBody = document.querySelector("body")
const getGreyBackground = document.querySelector(".grey-background")
const getRedBackground = document.querySelector(".red-background")
const getGreenBackground = document.querySelector(".green-background")
const getBlueBackground = document.querySelector(".blue-background")
const getYellowBackground = document.querySelector(".yellow-background")
const getMain = document.querySelector("main")
const getColorButton1 = document.querySelector("#colorButton1")
const getColorButton2 = document.querySelector("#colorButton2")
const getColorButton3 = document.querySelector("#colorButton3")
const getColorButton4 = document.querySelector("#colorButton4")
const getColorButton5 = document.querySelector("#colorButton5")

// Function for opening and closing the menu
let toggleNavStatus = false;
let toggleNav = function () {

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLis.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLis[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "0";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLis.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLis[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}


// EventListeners for opening the menu while hovering hamburger-button or nav-sidebar
getBtnToggleMenu.addEventListener("mouseover", function () { toggleNav() });
getBtnToggleMenu.addEventListener("mouseout", function () { toggleNav() });
getSidebar.addEventListener("mouseover", function () { toggleNav() });
getSidebar.addEventListener("mouseout", function () { toggleNav() });


// Set color functions
const setGrey = function () {
    getBody.className = "grey-background";
    getMain.innerHTML = "Home";
    getColorButton1.checked = true;
}
const setRed = function () {
    getBody.className = "red-background";
    getMain.innerHTML = "Rood";
    getColorButton2.checked = true;
}
const setGreen = function () {
    getBody.className = "green-background";
    getMain.innerHTML = "Groen";
    getColorButton3.checked = true;
}
const setBlue = function () {
    getBody.className = "blue-background";
    getMain.innerHTML = "Blauw";
    getColorButton4.checked = true;
}
const setYellow = function () {
    getBody.className = "yellow-background";
    getMain.innerHTML = "Geel";
    getColorButton5.checked = true;
}


// Set background color by clicking menu items
getGreyBackground.addEventListener("click", function () { setGrey() })
getRedBackground.addEventListener("click", function () { setRed() })
getBlueBackground.addEventListener("click", function () { setBlue() })
getGreenBackground.addEventListener("click", function () { setGreen() })
getYellowBackground.addEventListener("click", function () { setYellow() })


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





