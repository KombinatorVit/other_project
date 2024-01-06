$(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,

    });


    var mixer = mixitup('.portfolio__content');


    $('.portfolio__filter-btn-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')

    })


})