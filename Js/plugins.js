$(function () {
    'use strict';

    //Gallary Code

    $('.our_work ul li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        if ($($(this).data("class")) === '.all') {
            $($(this).data("class")).css("opacity", 1);
        } else {
            $($(this).data("class")).css("opacity", 1).siblings().css("opacity", 0.5);
        }
    });

    //product information

    $('.information .tab-list li').click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".info-content div").hide();
        $($(this).data("class")).fadeIn();
    });

    //Navbar code

    $(".navbar .navbar-header .fa").click(function () {
        $(".navbar .navbar-menu").fadeToggle(200);
    });

    //DropDown Menu

    $(".navbar .navbar-menu li:nth-of-type(4)").click(function () {
        $(".navbar .navbar-menu .dropdown").slideToggle(300);
    });

});


// $(this).data("class") => get class name

//$(className).css(opacity, 1).siblings().css(opacity, 0.5)
