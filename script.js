var SettingMenu = document.querySelector(".menu-setting");

function SettingMenuToggle() {
    SettingMenu.classList.toggle("menu-setting-height");
}

var DarkButtonToggle = document.getElementById("dark-btn");
DarkButtonToggle.onclick = function() {
    DarkButtonToggle.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");
    // Storing the value in the local Storage
    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light") {
    DarkButtonToggle.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-mode");
} else if (localStorage.getItem("theme") == "dark") {
    DarkButtonToggle.classList.add("dark-btn-on");
    document.body.classList.add("dark-mode");
} else {
    localStorage.setItem("theme", "light");
}

// Storing the value in the local Storage
// localStorage.setItem("theme", "light");

// Getting the value in the local Storage
// localStorage.getItem("theme");