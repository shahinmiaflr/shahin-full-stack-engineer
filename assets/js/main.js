$(document).ready(function($){
    $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left fa-beat-fade"></i>', '<i class="fa-solid fa-angle-right fa-beat-fade"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout : 2000
    });
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        dots: false,
        autoplayTimeout : 5000
    });

    $('#web-design-progressbar-1').circleProgress({
        value: 0.94,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(94 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-2').circleProgress({
        value: 0.98,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(98 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-3').circleProgress({
        value: 0.89,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(89 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-4').circleProgress({
        value: 0.99,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(99 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-5').circleProgress({
        value: 0.73,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(73 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-6').circleProgress({
        value: 0.9,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-7').circleProgress({
        value: 0.95,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-8').circleProgress({
        value: 0.96,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(96 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-9').circleProgress({
        value: 0.96,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(96 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-10').circleProgress({
        value: 0.98,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(98 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-11').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-12').circleProgress({
        value: 0.91,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(91 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-13').circleProgress({
        value: 0.95,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-14').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-15').circleProgress({
        value: 0.93,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(93 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-16').circleProgress({
        value: 0.99,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(99 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-17').circleProgress({
        value: 0.88,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(88 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-18').circleProgress({
        value: 0.6,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(60 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-19').circleProgress({
        value: 0.97,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(97 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-20').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-21').circleProgress({
        value: 0.55,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(55 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-22').circleProgress({
        value: 0.3,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(30 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-23').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-24').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-25').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-26').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
    $('#web-design-progressbar-27').circleProgress({
        value: 0.2,
        size: 270,
        fill: '#40CACF',
        thickness: 4.5,
        emptyFill : '#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span.progressbar-percentence').html(Math.round(20 * progress) + '<i>%</i>');
    });
});