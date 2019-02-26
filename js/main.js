// function crossFadeNav() {
//   var crossFade = document.querySelector(".cross-fade-nav");
//   crossFade.addEventListener("click", console.log(123));
// }

$(".cross-fade-nav").click(function() {
  $(".cross-fade-nav").css("opacity", "1");
  $(".slider-nav").css("opacity", ".6");
});

$(".slider-nav").click(function() {
  $(".slider-nav").css("opacity", "1");
  $(".cross-fade-nav").css("opacity", ".6");
  console.log(123);
});
