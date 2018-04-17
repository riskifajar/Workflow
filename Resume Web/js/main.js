//scroll


$(document).ready(function(){

$(function () {

    window.sr = ScrollReveal({reset: false});

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.vcard', {
        origin: 'right',
        duration: 2300,
    });

    sr.reveal('.about', {
        origin: 'right',
        duration: 2000,
    });

    sr.reveal('.title', {
        origin: 'right',
        duration: 2000,
    });

    sr.reveal('.skillbar', {
        origin: 'right',
        duration: 3000,
    });

    sr.reveal('.contact', {
        origin: 'right',
        duration: 3000,
    });
    sr.reveal('.peta', {
        origin: 'right',
        duration: 3000,
    });

})
});

// skill bar

$(document).ready(function () {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});

// loader
$(window).on('load', function () { 
    $('.loader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('.loader').delay(1000).css({
        'overflow': 'visible'
    });
});

//SIDEBAR
var sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('#page-wrapper');

sidebarBtn.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});
window.addEventListener('keydown', function (event) {

    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});


