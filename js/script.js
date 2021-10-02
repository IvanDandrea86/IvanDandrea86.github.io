$(document).ready(function() {
    $(".header_icon-bar").click(function(e){

      $(".nav_bar").toggleClass('is-open');
      e.preventDefault();
    });
  });
