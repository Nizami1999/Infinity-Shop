$(document).ready(function(){

        //nav toggle
        $nav = $('.nav');
        $toggleCollapse = $('.toggle-collapse');
    
        /* click event on toggle menu */
        /* toggleClass -----> Add or remove one or more classes from each element  */
    
        $toggleCollapse.click(function(){
            $nav.toggleClass('collapse');
        })
    
    
        //carousel

            var owl = $('.owl-carousel');
            owl.owlCarousel({
                loop: true, // infinity loop
                autoplay: true,
                autoplayTimeout: 5000, // автомтически переходит каждые три секунды
                margin: 30,
                nav: false, // Show next/prev buttons.
                items: 1, // The number of items you want to see on the screen. [3-default]
                dots: false,

            });
        
            // /* Чтобы работала с мышкой */
            // owl.on('mousewheel', '.owl-stage', function (e) {
            //     if (e.deltaY>0) {
            //         owl.trigger('next.owl');
            //     } else {
            //         owl.trigger('prev.owl');
            //     }
            //     e.preventDefault();
            // });
        
        
        
        
        
    
    
    

        // Animations
        AOS.init()

});


