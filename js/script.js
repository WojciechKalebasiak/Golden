$(function() {
    //*******************************************Animating header*******************************************
    AOS.init();
    $('body').hide();
    $('.tellmemore').hide();
    setTimeout(function() {
        $('body').fadeIn('100');
    }, 500);
    setTimeout(function() {
        $('.tellmemore').jAnimateOnce('fadeInUp').show();
    }, 2500);
});