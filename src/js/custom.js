$(function (){

'use strict';

var formErrors = true;

$('.username').blur(function(){ 
    
    if ($(this).val().length <3) {

         $(this).css('border','1px solid #F00');
         $(this).parent().find('.custom-alert').fadeIn(200);
         $(this).parent().find('.astrisx').fadeIn(100);

    }else{

        $(this).css('border','1px solid #080');
        $(this).parent().find('.custom-alert').fadeOut(200);
        $(this).parent().find('.astrisx').fadeOut(100);
    
    }

}); 



$('.email').blur(function(){ 
    
    if ($(this).val().length < 1) {

         $(this).css('border','1px solid #F00');
         $(this).parent().find('.custom-alert').fadeIn(200);
         $(this).parent().find('.astrisx').fadeIn(100);

    }else{

        $(this).css('border','1px solid #080');
        $(this).parent().find('.custom-alert').fadeOut(200);
        $(this).parent().find('.astrisx').fadeOut(100);
    
    }

}); 



$('.message').blur(function(){ 
    
    if ($(this).val().length < 10) {

         $(this).css('border','1px solid #F00');
         $(this).parent().find('.custom-alert').fadeIn(200);
         $(this).parent().find('.astrisx').fadeIn(100);

    }else{

        $(this).css('border','1px solid #080');
        $(this).parent().find('.custom-alert').fadeOut(200);
        $(this).parent().find('.astrisx').fadeOut(100);
    
    }

}); 


});