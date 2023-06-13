var SettingMenu = document.querySelector(".menu-setting");

function SettingMenuToggle() {
    SettingMenu.classList.toggle("menu-setting-height");
}

var DarkButtonToggle = document.getElementById("dark-btn");
DarkButtonToggle.onclick = function() {
    DarkButtonToggle.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");
}

// Storing the value in the local Storage
// localStorage.setItem("theme", "light");

// Getting the value in the local Storage
// localStorage.getItem("theme");