/**
 * Created by Susan Dangol
 */


var winWidth = $(window).width();

$(document).ready(function () {
    sliderInit();
    addClassInit();
    navInit();
    mcustomInit();
});


/*------------------------------- Functions Starts -------------------------------*/
function sliderInit() {
    /*$('.common-banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 500,
        fade: true,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 667,
                settings: {
                    arrows: true,
                    dots: false
                }
            }
        ]
    });*/
    
   
      $('.promoters-slider').slick({
        dots: false,
        arrows:true,
        autoplay:false,
        autoplaySpeed:3000

      });
   
      $('.products').slick({
        slidesToShow: 4,
         slidesToScroll: 1,
        dots: false,
        arrows:false,
        autoplay:false,
        autoplaySpeed:3000

      });
      $('.work').slick({
        slidesToShow: 4,
         slidesToScroll: 1,
        dots: true,
        arrows:true,
        autoplay:false,
        autoplaySpeed:1000

      });
}

function addClassInit() {

}

function navInit() {
  $(document).scroll(function () {
    var $nav = $("#header-wrapper");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

}

function mcustomInit() {
}



/*-------------------------------- Functions Ends --------------------------------*/
