var SettingMenu = document.querySelector(".menu-setting");

function SettingMenuToggle() {
    SettingMenu.classList.toggle("menu-setting-height");
}

var DarkButtonToggle = document.getElementById("dark-btn");
DarkButtonToggle.onclick = function() {
    DarkButtonToggle.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-mode");
}