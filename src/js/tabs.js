import $ from "jquery";
// ------------------------------------------------
$(document).ready(function (e) {
let titleTab=  $(".tabs-title-js");

titleTab.on("click", function () {
let dropTab = $(this).siblings(".tabs-drop-js");
let imgTab = $(this).find(".tabs-img-js");
let parent = $(this).parent().parent(".tabs__item")

if (dropTab.hasClass("act")) {
dropTab.slideUp(200).removeClass("act");

setTimeout(function () {
parent.removeClass("act");
}, 200)

imgTab.css("transform", "rotate(90deg)");
} 

else {
parent.addClass("act");
imgTab.css("transform", "rotate(-90deg)");
dropTab.slideDown(200).addClass("act");
}		
});
})

$(document).ready(function (e) {
let titleTab = $(".tabsDep-title-js");

titleTab.on("click", function () {
let dropTab = $(this).siblings(".tabsDep-drop-js");
let imgTab = $(this).find(".tabsDep-img-js");
let parent = $(this).parent().parent(".tabs__item")

if (dropTab.hasClass("act")) {
dropTab.slideUp(200).removeClass("act");

setTimeout(function () {
parent.removeClass("act");
}, 200)

imgTab.css("transform", "rotate(90deg)");
} 

else {
parent.addClass("act");
imgTab.css("transform", "rotate(-90deg)");
dropTab.slideDown(200).addClass("act");

setTimeout(function () {
$(".tabs__item").not(parent).removeClass("act");
}, 200)



$(".tabs__item")
  .not(parent)
  .find(".tabs-item__img")
  .css("transform", "rotate(90deg)");


$(".tabs__item")
  .not(parent)
  .find(".tabs__drop")
  .slideUp(200)
  .removeClass("act");



}		
});
})