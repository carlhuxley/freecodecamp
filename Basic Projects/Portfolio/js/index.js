$(document).ready(function() {
  $('.pic').hover(
    function() {
      $('.hovertext').animate({
        "top": "-=38px"
      }, "slow");
    },
    function() {
      $('.hovertext').animate({
        "top": "+=38px"
      }, "slow");
    });
});
