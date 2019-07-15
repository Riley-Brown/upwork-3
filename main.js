// 3 second transition speed for crossfade
$(".carousel").carousel({
  interval: 3000,
  pause: false
});

// slider nav click
$(document).ready(function() {
  $(".sliders-nav").on("click", function() {
    console.log(123);
    $(".carousel").css("z-index", "-10");
    $(".sliders-nav").css("opacity", "1");
    $(".cross-fade-nav").css("opacity", ".6");
    $(".sliders-nav-img").attr("src", "svg/sliders-on.svg");
    $(".cross-fade-nav-img").attr("src", "svg/crossfades-off.svg");
  });
});

// cross fade nav click
$(document).ready(function() {
  $(".cross-fade-nav").on("click", function() {
    console.log(123);
    $(".carousel").css("z-index", "10");
    $(".cross-fade-nav").css("opacity", "1");
    $(".sliders-nav").css("opacity", ".6");
    $(".cross-fade-nav-img").attr("src", "svg/crossfades-on.svg");
    $(".sliders-nav-img").attr("src", "svg/sliders-off.svg");
  });
});

// init sliders container on load of page
$(window).on("load", function() {
  $(function() {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
      default_offset_pct: 0.5
    });
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
      default_offset_pct: 0.3,
      orientation: "vertical"
    });
  });
});

// lazy load images with lazy class
setTimeout(function() {
  $(document).ready(function() {
    $(".lazy").each(function() {
      $(this).attr("src", $(this).attr("data-src"));
    });
  });
}, 2000);
