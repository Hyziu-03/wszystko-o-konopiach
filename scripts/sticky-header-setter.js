// * Function Setting The Sticky Header 

function setStickyHeader() {
    'use strict';

    try {
        var headerWrapper = document.getElementById("header-wrapper");
        var $header = $('#header');
        var headerHeight = $header.height() + 20;

        var headerPosition = $header.offset.top;
        headerWrapper.style.height = headerHeight + "px";

        $(window).scroll(function () {
            var scrollPosition = $(this).scrollTop();

            if (scrollPosition >= headerPosition) {
                $header.addClass('fixed-position');
            } else {
                $header.removeClass('fixed-position');
            }
        });
    } catch (e) {
        alert("Coś poszło nie tak, jeżeli błąd się powtarza skorzystaj z formularza kontaktowego.");
        throw new Error(e);
    }
}

window.onload = setStickyHeader();
