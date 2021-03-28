// * Handlers

var basics = document.getElementById("podstawy");
var industry = document.getElementById("przemysl");
var health = document.getElementById("zdrowie");
var construction = document.getElementById("terapie");
var cbd = document.getElementById("cbd");
var marihuana = document.getElementById("marihuana");
var offset = document.getElementById("header").clientHeight;

// * Click listeners

basics.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#00').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

industry.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#04').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

health.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#010').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

construction.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#021').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

cbd.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#023').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});

marihuana.addEventListener("click", function () {
    'use strict';

    try {
        $('html, body').animate({
            scrollTop: $('#032').offset().top - 2 * offset
        }, 'slow');
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
});
