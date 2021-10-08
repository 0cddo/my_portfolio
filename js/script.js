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

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
