//LOADER
$(window).on("load", function() {
    "use strict";
    $(".loader").fadeOut(800);
});

jQuery(function($) {
    "use strict";


    // ======================================================
    //SCROLLING
    // ======================================================
    $("body").scrollspy({
        target: ".navbar",
        offset: 50
    });


    // ------ Back To Top
    var scrollUp = $(".scrollup");
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 600) {
            scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }
    });
    scrollUp.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // ------ Smooth Scroll
    $(".scroll").on("click", function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });


    // ------ MENU HIDE & SHOW
    var ost = 0;
    var menu = $(".navbar");
    $(window).on("scroll", function() {
        var cOst = $(this).scrollTop();
        if (cOst == 0) {
            menu.addClass('top-nav-collapse');
        } else if (cOst > ost) {
            menu.addClass('top-nav-collapse').removeClass('default');
        } else {
            menu.addClass('default').removeClass('top-nav-collapse');
        }
        ost = cOst;
    });


    // ----- LIGHT BOX
    if ($(".lightbox-image").length) {
        $(".lightbox-image").fancybox();
    }


    // -----POPUPS
    $('a[href=".team"]').on('click', function(event) {
        event.preventDefault();
        $("#team").addClass('open');
        $('#team > form > input[type="search"]').focus();
    });
    $("#team, #team button.close").on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('a[href=".popup_login"]').on('click', function(event) {
        event.preventDefault();
        $("#popup_login").addClass("open");
        $('#popup_login > form > input[type="search"]').focus();
    });
    $("#popup_login, #popup_login button.close").on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});