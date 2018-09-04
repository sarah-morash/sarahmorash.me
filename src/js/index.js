window.$ = require("jquery");
import inView from "in-view";

$(document).ready(function() {
  // load html components
  $("header")
    .eq(0)
    .load("../dist/components/header.html", function() {
      addFunctionality();
    });
  $("footer")
    .eq(0)
    .load("../dist/components/footer.html", function() {});
});

function addFunctionality() {
  var $target = $("#main");
  inView(".section").on("enter", function(el) {
    var color = $(el).attr("data-background-color");
    $target.css("background-color", color);
  });

  $(".menu-icon").click(function(e) {
    $(".bar1").toggleClass("active");
    $(".bar2").toggleClass("active");
    $(".bar3").toggleClass("active");

    if ($(".bar1").hasClass("active")) {
      document.getElementById("nav").classList.remove("closeNav");
      document.getElementById("nav").classList.add("openNav");
      document.getElementById("nav").style.height = "100%";
    } else {
      document.getElementById("nav").classList.remove("openNav");
      document.getElementById("nav").classList.add("closeNav");
      document.getElementById("nav").style.height = "0%";
    }
  });
}
