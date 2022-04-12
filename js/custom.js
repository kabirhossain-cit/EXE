//scroll indicator
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
$(function() {

    //banner-slick

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        infinite: true,
    });
    //search
    $('.search-optn').click(function() {
        $('.search-bar-optn').fadeToggle(300);
    });
    //venobox
    $(document).ready(function() {
        $('.venobox').venobox();
    });
    //btt

    $('.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //sticky-menu

    $(window).scroll(function() {
        var btt = $(this).scrollTop();
        if (btt > 200) {
            $('.sticky-nav').addClass('sticky-menu');
            $('.sticky-nav').addClass('sticky-menu');
        } else {
            $('.sticky-nav').removeClass('sticky-menu');
        }
        if (btt > 400) {
            $('.back-to-top').fadeIn(300);
        } else {
            $('.back-to-top').fadeOut(300);
        }
    });

    //counterup

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //feedbackslider

    $('.main-feed-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: true,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //blog-slider
    $('.main-blog').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //brand-slider
    $('.main-brand').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
    });


});