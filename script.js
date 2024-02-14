document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector(".fa-bars");
    var navMenu = document.querySelector(".nav-menu");
    var closeIcon = document.querySelector(".fa-xmark");

    function toggleMenuIcons() {
        if (window.innerWidth <= 1080) {
            menuIcon.style.display = "block";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "none";
            closeIcon.style.display = "none";
        }
    }

    toggleMenuIcons();

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.add("slide-left");
        navMenu.classList.add("slide-down");
        closeIcon.classList.remove("slide-right");
        navMenu.classList.remove("slide-up");
        menuIcon.addEventListener("transitionend", function() {
            menuIcon.style.visibility = "hidden";
            closeIcon.style.visibility = "visible";
        }, { once: true });

        closeIcon.addEventListener("click", function() {
            closeIcon.classList.add("slide-right");
            navMenu.classList.add("slide-up");
            closeIcon.addEventListener("transitionend", function() {
                closeIcon.style.visibility = "hidden";
                menuIcon.style.visibility = "visible";
                menuIcon.classList.remove("slide-left");
            }, { once: true });
        });
    });

    window.addEventListener("resize", toggleMenuIcons);
});