//NO JS Scripting
$('.nojs').hide();
$('header').show();

//Browser Recognition
var sBrowser, sUsrAg = navigator.userAgent;
if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

//Header Visibility
$(window).scroll(function() {
    //get scroll value 
    var height = $(window).scrollTop();
    
    if(height > 0){
        $('.no-header').removeClass('no-header');
    } else{
        $('.header').addClass('no-header');    
    }
});

//Menu
$('.icon').on('click',function(){
    $('.icon').toggleClass('active');
    $('nav').toggleClass('close');
});

//Hiding branding
setTimeout(function() {
    $('img[alt="www.000webhost.com"]').hide();
  }, 2000);


//Parallax Effect
$(window).scroll(function() {
    //get scroll value 
    var height = $(window).scrollTop();

    //calculate the amount of effect to apply
    var translate1 = 'translateY('+ (height) / 4 +'px)';
    var translate2 = 'translateY(-'+ (height) / 4 +'px)';

    //apply the effect
    $('.parallax_about').css('transform',translate1);
    $('.parallax_about-two').css('transform',translate2);


    //title
    var inner = $('.carousel_slide-1').innerHeight();
    var portfolioHero = $('.portfolio-hero').innerHeight();
    if(height < inner){
        var translate3 = 'translateY('+ (height/10) +'px)';

        $('.svg-wrapper').css('transform',translate3);
    }
//    if(height < portfolioHero){
//        var translate3 = 'translate('+ (height/10) +'px)';
//        
//        $('.portfolio-hero .title').css('transform',translate3);
//    }
    

});
