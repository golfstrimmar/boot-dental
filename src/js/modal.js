import $ from "jquery";
import Plyr from "plyr";

$(document).ready(function () {
  // --------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------
 

  // плеер только у окна с классом .first-popup поэтому делать проверку и включать если есть такой класс

  let Popup = $(".popup");

  $(".popup-init-js").on("click", function () {
    Popup.fadeOut(200);
    let rel = $(this).attr("rel");
    let pop = $("div." + rel);
    if (Popup.hasClass(rel)) {
      pop.fadeIn(200);
    }
    if (pop.hasClass("first-popup")) {
       
      $.ajax({
        url: "/popup-1.html",
        type: "GET",
        // здесь обрабатывается результат, тоторый пришел с сервера. -- msg
        success: function (msg) {
          $(".popup__inner").append(msg);
          const player = new Plyr("#player");
           player.play();
        },
        error: function () {
          alert("Error video");
        },
      });
         

    }

    $("body").css("overflow", "hidden");
  });

  $(".close-js").on("click", function () {
    Popup.fadeOut(200);
    $("body").css("overflow", "visible");
    $(".plyr").remove();
    player.stop();
    
  });

  $(document).on("mouseup", function (e) {
    if ($(".popup__overlay").is(e.target)) {
      Popup.fadeOut(200);
      $("body").removeClass("lock");
      $("body").css("overflow", "visible");
      $(".plyr").remove();
      player.stop();
      

    }
  });
});
