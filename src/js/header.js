
import $ from "jquery";
// ------------------------------------------------



$(document).ready(function (e) {

  $(".header__burger").on("click", function () {
    
    $(".menu")
      .addClass("menu-active")
      .append(
        $(
          "<div class='header__info info'><a class='info_phone' href='#!'>+7(000) 123 45 65</a><div class='info_search border-bg'><input type='text' placeholder='Поиск' /><i class='icon-search'></i></div></div>"
        )
      );
      
      setTimeout(function () {
        $(".info").addClass("info-active");
      }, 200);

    $("body").addClass("lock");
  }); 

$(".header__close").on("click", function () {
$(".menu")
  .removeClass("menu-active")
  .find(".header__info")
  .remove();
  $(".info").removeClass("info-active");
$("body").removeClass("lock");
  });

});

 

  // ----- header меняется в размерах и цвете
   window.addEventListener("scroll", function (event) {
     if (window.pageYOffset > 100) {
       document.querySelector(
         ".header"
       ).classList.add("responciveHeader");

     } else {
       document.querySelector(".header").classList.remove("responciveHeader");
     }
   });

  // ============кнопка на начало если вдруг не понравится
  // $(document).ready(function (e) {
  //     $(".scrollup").click(function () {
  //       $("html, body").animate(
  //         {
  //           scrollTop: 0,
  //         },
  //         1000
  //       );
  //     });
  //   }),
  //     $(document).ready(function (e) {
  //       $(window).scroll(function () {
  //         if ($(this).scrollTop() > 200) {
  //           $(".scrollup").fadeIn();
  //         } else {
  //           $(".scrollup").fadeOut();
  //         }
  //       });
  //     }),

//   function () {
//     "use strict";

//     var upDownBtn = document.querySelector(".up_down_btn");
//     var check;

//     function trackScroll() {
//       var scrolled = window.pageYOffset;
//       var coords = 200;

//       if (scrolled > coords) {
//         upDownBtn.classList.add("up_down_btn-show");
//         upDownBtn.innerHTML = "&uarr;";
//         upDownBtn.setAttribute("title", "Наверх");
//         check = false;
//       }
//       if (scrolled < coords) {
//         upDownBtn.innerHTML = "&darr;";
//         upDownBtn.setAttribute("title", "Вниз");
//         check = true;
//       }
//     }

//     function backToTop() {
//       upDownBtn.classList.add("up_down_btn-disabled");
//       if (!check) {
//         (function goTop() {
//           if (window.pageYOffset !== 0) {
//             window.scrollBy(0, -15);
//             setTimeout(goTop, 0);
//           } else {
//             upDownBtn.classList.remove("up_down_btn-disabled");
//           }
//         })();
//         return;
//       } else if (check) {
//         (function goBottom() {
//           var match = Math.ceil(
//             window.pageYOffset + document.documentElement.clientHeight
//           );

//           if (match != document.documentElement.scrollHeight) {
//             window.scrollBy(0, 15);
//             setTimeout(goBottom, 0);
//           } else {
//             upDownBtn.classList.remove("up_down_btn-disabled");
//           }
//         })();
//         return;
//       }
//     }

//     window.addEventListener("scroll", trackScroll);
//     upDownBtn.addEventListener("click", backToTop);
//   }
// )();


//          // ==скроллинг====ЯКОРЯ==============
//       $(document).ready(function (e) {
//         $('a[href^="#slider"]').click(function () {
//           var target = $(this).attr("href");
//           $("html, body").animate(
//             { scrollTop: $(target).offset().top - 60 },
//             800
//           ); //800 - длительность скроллинга в мс
//               menu.classList.remove("header__menu_act");
//               service.classList.remove("header-service_act");
//               header.appendChild(service);
//               body.style.overflow = "visible";
//           return false;
//         });
//       }),
//       $(document).ready(function (e) {
//         $('a[href^="#work"]').click(function () {
//           var target = $(this).attr("href");
//           $("html, body").animate(
//             { scrollTop: $(target).offset().top - 60 },
//             800
//           ); //800 - длительность скроллинга в мс
//               menu.classList.remove("header__menu_act");
//               service.classList.remove("header-service_act");
//               header.appendChild(service);
//               body.style.overflow = "visible";
//           return false;
//         });
//       }),
//       $(document).ready(function (e) {
//         $('a[href^="#arhi"]').click(function () {
//           var target = $(this).attr("href");
//           $("html, body").animate(
//             { scrollTop: $(target).offset().top - 60 },
//             800
//           ); //800 - длительность скроллинга в мс
//               menu.classList.remove("header__menu_act");
//               service.classList.remove("header-service_act");
//               header.appendChild(service);
//               body.style.overflow = "visible";
//           return false;
//         });
//       }),
//       $(document).ready(function (e) {
//         $('a[href^="#footer"]').click(function () {
//           var target = $(this).attr("href");
//           $("html, body").animate(
//             { scrollTop: $(target).offset().top - 60 },
//             800
//           ); //800 - длительность скроллинга в мс
//               menu.classList.remove("header__menu_act");
//               service.classList.remove("header-service_act");
//               header.appendChild(service);
//               body.style.overflow = "visible";
//           return false;
//         });
//       })
     