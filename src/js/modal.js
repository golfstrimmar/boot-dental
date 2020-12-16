
import $ from "jquery";


$(document).ready(function () {

  // $(".popup").fadeOut(1);
  $(".popup__init").on("click", function () {
    $(".modal").fadeIn(200);
    player.play();
  });
  $(".icon-close2").on("click", function () {
    $(".modal").fadeOut(200);
    player.stop();
  });
  $(".popup__overlay").on("click", function () {
    $(".modal").fadeOut(200);
    player.stop();
  });
});

