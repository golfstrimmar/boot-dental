import $ from "jquery";
// ------------------------------------------------

$(document).ready(function () {
  $(".load-more").on("click", function () {
    const btn = $(this);
    const loader = $(this).find(".spinner-border");
    $(".addFiles").slideUp(1);
    $.ajax({
      url: "/data.html",
      type: "GET",
      beforeSend: function () {
        // перед запросом блокируем кнопку
        btn.attr("disabled", true);
        // запускаем лоадер
        loader.addClass("d-inline-block");
      },

      // здесь обрабатывается результат, тоторый пришел с сервера. -- msg
      success: function (msg) {
        setTimeout(function () {
          // тормозим лоадер для наглядности загрузки
          loader.removeClass("d-inline-block");
          // запрещаем кнопку
          btn.attr("disabled", true);
        }, 300);
        // перед кнопкой размещаем дополнительные посты
        $(".addFiles").append(msg).slideDown(500);
      },

      error: function () {
        alert("Error");
        loader.removeClass("d-inline-block");
        btn.attr("disabled", false);
      },
    });
  });
});
