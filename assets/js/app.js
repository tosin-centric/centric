$(document).ready(function () {
    init();
  });
  function init() {
    AOS.init();
    var counter = 0;
    colors = ["green", "blue", "turq"]
    setInterval(function () {
      $("div.home-hero__bg").attr("data-colour", colors[counter]);
      if (counter === 2) {
        counter = 0; // If counter = 3, set it back to 1 for next loop
      } else {
        counter++; // Else, add 1 to the counter
      }
    }, 3000);
  }