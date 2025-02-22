function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        var menu = document.getElementById("menu");
        var overlay = document.getElementById("overlay");

        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
});