import jQuery from 'jquery';
import gsap from 'gsap';

var slide;

jQuery(function($){
    slide = $("#myslidetitle");
});

window.addEventListener("load", function() {
    startSlider();
});

function startSlider() {
    gsap.to(slide, {x: '18%', duration: 9.5});
}