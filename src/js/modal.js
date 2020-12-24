import $ from "jquery";
import Plyr from "plyr";

$(document).ready(function () {
  const player = new Plyr("#player");

// плеер только у окна с классом .first-popup поэтому делать проверку и включать если есть такой класс

  $(".popup-init-js").on("click", function () {
    let pop = $("div." + $(this).attr("rel"))
    pop.fadeIn();
    if(pop.hasClass("first-popup")){
      player.play();
    }
  });

  $(".close-js").on("click", function () {
    $(".popup").fadeOut(200);
    player.stop();
  });

  $(".popup__overlay").on("click", function () {
    $(".popup").fadeOut(200);
    player.stop();
  });

});
