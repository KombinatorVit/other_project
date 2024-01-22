$(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"> <img src="images/back.svg" alt=""></button>',

        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/forward.svg" alt=""></button>',
        responsive:
            [
                {
                    breakpoint: 1024,
                    settings: {}
                },

                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                    }
                }
            ]
    })
    ;
});


