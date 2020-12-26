import $ from "jquery";
import Plyr from "plyr";

$(document).ready(function () {
  const player = new Plyr("#player");

// плеер только у окна с классом .first-popup поэтому делать проверку и включать если есть такой класс

let Popup = $(".popup");


  $(".popup-init-js").on("click", function () {

  Popup.fadeOut(200);
  let rel = $(this).attr("rel");
  let pop = $("div." + rel);
  if (Popup.hasClass(rel)) {
    pop.fadeIn(200);
  }
    if(pop.hasClass("first-popup")){
      player.play();
    }
// $("body").addClass("lock");
    $("body").css("overflow","hidden");

  });

  $(".close-js").on("click", function () {
    Popup.fadeOut(200);
   $("body").css("overflow", "visible");
    player.stop();
  });


$(document).on("mouseup", function (e) {
  if ($(".popup__overlay").is(e.target)) {
    Popup.fadeOut(200);
    $("body").removeClass("lock");
    $("body").css("overflow", "visible");
    player.stop();
  }
});

});
