import $ from "jquery";

$(Document).ready(function () {
  $(".slider-main-js").slick({
    dots: true,
    arrows: true,
    // slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    autoplaySpeed: 1000,
    centerMode: false,
    // centerPadding: "0px",
    slidesToShow: 1,
    nextArrow: $(".slider-main-arrows__arrow_next"),
    prevArrow: $(".slider-main-arrows__arrow_prev"),
    customPaging: function (slider, i) {
      return i + 1 + "/" + slider.slideCount;
    },
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});
