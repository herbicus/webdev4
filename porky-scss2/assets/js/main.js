

console.log("main.js loaded");


// SCROLL TO
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-1").offset().top
    }, 2000);
});

$("#news").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-2").offset().top
    }, 2000);
});

$("#blog").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-3").offset().top
    }, 2000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-4").offset().top
    }, 2000);
});

$("#network").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-5").offset().top
    }, 2000);
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".section-6").offset().top
    }, 2000);
});

//  STICKY JS
$(document).ready(function(){
    $("nav").sticky({topSpacing:0});
});


//  END






