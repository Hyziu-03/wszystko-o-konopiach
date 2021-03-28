// * Handler

var arrow = document.getElementById("arrow");

// * Listeners

window.addEventListener("scroll", function () {
    'use strict';

    try {
        if (scrollY > 125) {
            arrow.style.visibility = "visible";
        } else {
            arrow.style.visibility = "hidden";
        }
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

arrow.addEventListener("click", function () {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
