/*
 * scripts.js
 *
 * auto-concatenated jquery, modernizr and custom alternate files
 *
 */

//@codekit-prepend "libs/jquery-1.7.1.min.js";
//@codekit-prepend "libs/ss-standard.js";

var win = $(window);
var body = $('body');
var doc = $(document);


// Add .scroll class to body if window scrolled past 10

win.scroll(function() {
    if ($(window).scrollTop() > 8) {
        $('#intro').addClass('scroll');
    }
});

doc.scroll(function() {
    if ($(window).scrollTop()) {
        $('#intro').removeClass('scroll');
    }
});



var backToTop = $('#back-to-top');

backToTop.click(function(e){
    e.preventDefault();
    $('body').animate({ scrollTop: '0' });
});
