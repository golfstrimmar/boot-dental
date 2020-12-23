
import $ from "jquery";
import Plyr from "plyr";



$(document).ready(function () {
const player = new Plyr("#player");

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

