// superslides 동작
$(document).ready(function () {
  $("#slides").superslides({
    animaiton: "fade",
    play: 3000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Soft Engineer.", "Web Debeloper.", "Front-end Developer."],
    typeSpeed: 80,
    loop: true,
    startDelay: 1000,
    backDelay: 600,
    showCursor: false,
  });
});
