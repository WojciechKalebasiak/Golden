$(function() {
    //Init Animate on Scroll efects
    AOS.init();
    // Animating header
    $('body').hide();
    $('.tellmemore').hide();
    setTimeout(function() {
        $('body').fadeIn('100');
    }, 500);
    setTimeout(function() {
        $('.tellmemore').jAnimateOnce('fadeInUp').show();
    }, 2500);
});