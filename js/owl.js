$(document).ready(function () {
    $('.owl-carousel').owlCarousel({

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 2,

            }
        }
    });
});




