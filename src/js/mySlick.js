import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {



$(".slider-js-1").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--1"),
  prevArrow: $(".slider__arrow_prev--1"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});
$(".slider-js-2").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--2"),
  prevArrow: $(".slider__arrow_prev--2"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});
$(".slider-js-3").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--3"),
  prevArrow: $(".slider__arrow_prev--3"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});
$(".slider-js-4").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--4"),
  prevArrow: $(".slider__arrow_prev--4"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});

 $(".slider-main-js").slick({
   dots: true,
   arrows: true,
   slidesToShow: 1,
   speed: 800,
   easing: "ease",
   cssEase: "linear",
   infinite: true,
   slidesToShow: 1,
   nextArrow: $(".slider-main-arrows__arrow_next"),
   prevArrow: $(".slider-main-arrows__arrow_prev"),
   customPaging: function (slider, i) {
     return i + 1 + "/" + slider.slideCount;
   },
 });

  $("#your-class").slick({
    infinite: true,
    slidesToShow: 1,
  });
});
