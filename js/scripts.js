(function($){

   
   //slider1
    jQuery(document).ready(function() {

        $(".slider1").owlCarousel({

        "stagePadding": 60,  
        "items" : 3,
        "margin" : 15,
        "autoplay": true,       
        "autoplayTimeout" : 2000,
        "loop" : true,
        "center": true,
        "nav" : false,
        "dop" : false,
        "responsive" : {
            0 : {
                "items" : 1,
                "stagePadding": 10
            },
            320 : {
                "items" : 1,
                "stagePadding": 10
            },
              375 : {
                "items" : 1,
                "stagePadding": 10
            },
             400 : {
                "items" : 1,
                "stagePadding": 10
            },
            576 : {
                "items" : 1,
                "stagePadding": 90
            },
            768 : {
                "items" : 1,
                "stagePadding": 10
            },
            991 : {
                "items" : 3,
                "stagePadding": 10               
            },

            1200 : {
                "items" : 3,
                "stagePadding": 10              
            }


        }

      });

    var owl = $('.slider1');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn1').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn1').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })








    jQuery(".menuicon1").click(function(){
    jQuery(".menuicon2").show();        
 
    });

    jQuery(".menuicon1").click(function(){
    jQuery(".menuicon1").hide();

    });

    jQuery(".menuicon2").click(function(){
    jQuery(".menuicon1").show();        
 
    });

    jQuery(".menuicon2").click(function(){
    jQuery(".menuicon2").hide();
    
    });

    jQuery(".mian_nav").click(function(){
    jQuery(".header_nav").slideToggle();
    });




















    });
})(jQuery);