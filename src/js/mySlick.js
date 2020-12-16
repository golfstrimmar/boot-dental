import $ from "jquery";

$(Document).ready(function () {
  $(".slider-burger-js").slick({
    // dots: true,
    // slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
arrows: false,
    // centerMode: true,
    // centerPadding: "10px",
    slidesToShow: 4,
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
