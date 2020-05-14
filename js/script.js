//Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Hamburgur menu
function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function(){
     $(".navbar-nav").hide();
  $(".canvas-menu").click(function(){
    $(".navbar-nav").toggle();
  });
});