$(document).ready(function () {
    $('.joined__row').slick({
        responsive: [
            {
                breakpoint: 5024,
                settings: "unslick",
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});


$('.menu-btn').click(function () {
    $('.menu-list').toggleClass('menu-list-active');

    if ($('.menu-list').hasClass('menu-list-active')) {

        $(document).click(function (e) {

            // var div = $("#popup"); // тут указываем ID элемента
            if (!$('.menu-list').is(e.target) &&
                $('.menu-list').has(e.target).length === 0) { // и не по его дочерним элементам) {
                $('.menu-list').removeClass('menu-list-active');
            }
            return;
        });

        return false;
    }
});
$('.close').click(function () {
    $('.menu-list').removeClass('menu-list-active');
});



$(window).scroll(function () {
    $('.header').toggleClass('header-sticky', $(this).scrollTop() > 400);
});