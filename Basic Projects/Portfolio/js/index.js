$(document).ready(function() {

  $(".demo-box").hover(

    function() {
      var id = $(this).attr('id');
    //alert(id);
      $("#info-one").(".hovertext").animate({
        "top": "-=140px"
      }, "fast");
    },
    function() {
      $("#info-one").(".hovertext").animate({
        "top": "+=140px"
      }, "fast");
    });
});
