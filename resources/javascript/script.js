$(document).ready(function(){

    /* for the stiocky nav bar */
    
   var waypoints = $('.js--section-features').waypoint(function(direction) {

  if(direction == "down"){

            $('nav').addClass('sticky');

        } else {

            $('nav').removeClass('sticky');

        }

        //notify(this.element.id + ' hit 25% from top of window')

}, {

  offset: '60px'

   });

/* scroll on buttons */
    
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
/* smooth scrolling */
    
    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
    
    
/* animations on scroll */
    
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
    
}, { 
    offset: '50%'
});    
    
   $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
    
}, { 
    offset: '50%'
}); 
    $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
    
}, { 
    offset: '50%'
}); 
    $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
    
}, { 
    offset: '50%'
}); 
    /* mobile navigtaion */
    
       $('.js--nav-icon').click(function(){
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon ion-icon');
       nav.slideToggle(200);
        
       if(icon.hasClass('hide')){
          icon.toggleClass('hide')
       } 
        
        
    });
});