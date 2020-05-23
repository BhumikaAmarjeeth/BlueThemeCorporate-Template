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
    if($(window).width() > 992){
     $(".navbar-nav").hide();
  $(".canvas-menu").click(function(){
    $(".navbar-nav").toggle();
  });
    }
});

//clients
$('.blog1').owlCarousel({
	loop:true,
	items:3,
	dots: true,
	margin:50,
	autoplay:true,
	autoplayTimeout:1000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 3
		}
	}
});