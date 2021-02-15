import $ from "jquery";
// ------------------------------------------------







//    // ==скроллинг====ЯКОРЯ==============
$(document).ready(function (e) {
  $('a[href^="#cards"]').click(function () {
    var target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
    menu.classList.remove("header__menu_act");
    service.classList.remove("header-service_act");
    header.appendChild(service);
    body.style.overflow = "visible";
    return false;
  });
}),
  $(document).ready(function (e) {
    $('a[href^="#slider"]').click(function () {
      var target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
      menu.classList.remove("header__menu_act");
      service.classList.remove("header-service_act");
      header.appendChild(service);
      body.style.overflow = "visible";
      return false;
    });
  }),
  $(document).ready(function (e) {
    $('a[href^="#bunner"]').click(function () {
      var target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
      menu.classList.remove("header__menu_act");
      service.classList.remove("header-service_act");
      header.appendChild(service);
      body.style.overflow = "visible";
      return false;
    });
  }),
  $(document).ready(function (e) {
    $('a[href^="#arhi"]').click(function () {
      var target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
      menu.classList.remove("header__menu_act");
      service.classList.remove("header-service_act");
      header.appendChild(service);
      body.style.overflow = "visible";
      return false;
    });
  }),
  $(document).ready(function (e) {
    $('a[href^="#contacts"]').click(function () {
      var target = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(target).offset().top - 60 }, 800); //800 - длительность скроллинга в мс
      menu.classList.remove("header__menu_act");
      service.classList.remove("header-service_act");
      header.appendChild(service);
      body.style.overflow = "visible";
      return false;
    });
  });
