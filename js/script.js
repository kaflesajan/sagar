$(document).ready(function(){
    $(".oneSlider").owlCarousel(
        {
            items:1,
            loop:true,
            nav:true,
        }
    );
    $(".fourSlider").owlCarousel(
        {
   
            loop:true,
            nav:true,
            margin:20,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:4,
                }
            }
        }
    );
    $(window).scroll(function(){
        if($(this).scrollTop()> 150)
        {
            $(".arrow").show();
            $(".navbar-brand").show()
            $(".navbar-nav").addClass("ms-auto")
            $(".bg-light").addClass("menu-fixed")
            
        }
        else
        {
            $(".arrow").hide();
            $(".navbar-brand").hide()
            $(".navbar-nav").removeClass("ms-auto")
            $(".bg-light").removeClass("menu-fixed")
        }
    })
  });

  AOS.init();