<script type="text/javascript">
    $('#hero').css('max-height',window.innerHeight);

    //PARTICLES JS
    particlesJS.load('particles', 'js/particles.json', function() {
        console.log('loaded...');
    });

    //CAROUSEL JS
    var
        figure = document.querySelector('.carousel'),

        images = figure.children,
        n = images.length,
        gap = 0

        theta =  2 * Math.PI / n,
        currImage = 0
    ;

    setupCarousel(n, $(images[0]).width());

    $('window').on('resize', function(){
        setupCarousel(n, $(images[0]).width());
    });

    function setupCarousel(n, s) {
//        apothem = s / (2 * Math.tan(Math.PI / n));
//        
//        var transformOrigin = '50% 50% '+ -1*apothem +'px';
//        
//        if(sBrowser == "Google Chrome" || sBrowser == "Mozilla Firefox"){
//            $(figure).css('transform-origin',transformOrigin);
//        }
//        for (var i = 0; i < n; i++) {
//          images[i].style.padding = `${gap}px`;
//        }
//
//        for (i = 0; i < n; i++) {
//            var transform = 'rotateY('+i*theta+'rad)';
//            var element = images[i];
//            
//            $(element).css('transform-origin',transformOrigin);
//            $(element).css('transform', transform);
//            
//        }
//
//
//        rotateCarousel(currImage);
//        
//        
//        
        
        // if(sBrowser == "Apple Safari"){
        //     apothem = s / ((7 * Math.PI) / n);
        // }else{

        // }
        apothem = s / ((2 * Math.PI) / n);
        var transformOrigin = '50% 50% '+ -1*apothem +'px';
        
        if(sBrowser == "Google Chrome" || sBrowser == "Mozilla Firefox"){
            $(figure).css('transform-origin',transformOrigin);
        }
        for (i = 0; i < n; i++) {
            // if(sBrowser == "Apple Safari"){
            //     var transform = 'rotateY('+i*theta+'rad) scale(0.35)';
            // }else{

            // }
            var transform = 'rotateY('+i*theta+'rad)';
            var element = images[i];
            
            $(element).css('transform-origin',transformOrigin);
            $(element).css('transform', transform);
        }

        rotateCarousel(currImage);
        
        
        
        
        
        
    }
    function rotateCarousel(imageIndex) {
        figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
        if(sBrowser === "Apple Safari"){
            figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
        }
        currImage = imageIndex;
    }

    //Carousel Controls
    $('.carousel_control').on('click',function(e){
        var element = e.currentTarget;
        var index = $(element).index();
        console.log(index);
        rotateCarousel(index);

        //removing active class from prev slide and adding to new
        $('.carousel_control-active').removeClass('carousel_control-active');
        $(element).addClass('carousel_control-active');
    });

//    //Card Flip
//    $('.work_slider_card_button').on('click',function(e){
//        e.preventDefault;
//        e.stopPropagation;
//
//        //get the top level of the card
//        var card = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
//
//        //get both sides of the card
//        var front = $(card).children('.work_slider_cardFront');
//        var back = $(card).children('.work_slider_cardBack');
//
//        //flip both sides to create flip effect
//        $(front).toggleClass('work_slider_cardFront-flipped');
//        $(back).toggleClass('work_slider_cardBack-flipped');
//    });

    //Connect Card Animation
    $('.connectCardCont').on('click',function(e){
        $('.connectCardCont').toggleClass('up');
    })


    if(sBrowser == "Apple Safari"){        
        $('.nojs').show();
        $('.nav.nojs').hide();
        $('header').show();
        // $('.carousel_outer').css('opacity','0');
        $('.carousel_controls').css('opacity','0');
    }


    //Portfolio Carousel
    var windowWidth, desktopHeight, tabletHeight, mobileHeight, textHeight, textHeightpx;

    setTimeout(function(){    
        windowWidth = $(window).innerWidth();

        desktopHeight = $('.desktop-carousel').innerHeight();
        tabletHeight = $('.tablet-carousel').innerHeight();
        mobileHeight = $('.mobile-carousel').innerHeight();
        textHeight = $('.desktop-frame').innerHeight();
        if(windowWidth < 576){
            textHeight = textHeight * 2;
        }
        textHeightpx = textHeight + 'px';

        $('.desktop-carousel .item').each(function(){
            var height = desktopHeight + 'px';
            $(this).css('height',height);
        });
        $('.mobile-carousel .item').each(function(){
            var height = mobileHeight + 'px';
            $(this).css('height',height);
        });
        $('.tablet-carousel .item').each(function(){
            var height = tabletHeight + 'px';
            $(this).css('height',height);
        });

        //text area settings

        $('.text-carousel').css('height',textHeightpx);
        $('.text-carousel .item').each(function(){
            var height = textHeight + 'px';
            $(this).css('height',height);
        });
    }, 2000);

    var maxSlides = $('.carousel-container')[0].childElementCount - 1;
    var downn = 0;

    function down(dataa) {
        if(downn <= maxSlides && downn >= 0){
            $('.btn-lighten').removeClass('btn-lighten');
            if(dataa == 1){
                downn++;
            }if(dataa == 0){
                downn--;
            }
            var translateDesktop = 'translateY('+(desktopHeight*downn*-1)+'px)';
            var translateTablet = 'translateY('+(tabletHeight*downn*-1)+'px)';
            var translateMobile = 'translateY('+(mobileHeight*downn*-1)+'px)';
            var translateText =  'translateY('+(textHeight*downn*-1)+'px)';

            //apply
            $('.desktop-carousel .carousel-container').css('transform',translateDesktop);
            $('.tablet-carousel .carousel-container').css('transform',translateTablet);
            $('.mobile-carousel .carousel-container').css('transform',translateMobile);
            $('.text-carousel .carousel-container').css('transform',translateText);   
        }
        if(downn == 0){
            $('.btn-up').addClass('btn-lighten');
        }
        if(downn == maxSlides){
            $('.btn-down').addClass('btn-lighten');
        }       
    }
</script>