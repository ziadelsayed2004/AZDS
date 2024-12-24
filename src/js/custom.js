$(function (){

'use strict';

var userError = true;

var emailError = true;

var messageError= true;




$('.username').blur(function(){ 
    
    if ($(this).val().length <3) {

         $(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(200).end().find('.astrisx').fadeIn(100);
         userError=true;

    }
    else{

        $(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.astrisx').fadeOut(100);
        $(this).find('.astrisx').fadeOut(100);
        userError=false;

    }
    

}); 



$('.email').blur(function(){ 
    
    if ($(this).val().length < 1) {

        $(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(200).end().find('.astrisx').fadeIn(100);
        emailError=true;

    }
    else{

        $(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.astrisx').fadeOut(100);
        emailError=false;

    }

    

}); 



$('.message').blur(function(){ 
    
    if ($(this).val().length < 10) {

        $(this).css('border','1px solid #F00').parent().find('.custom-alert').fadeIn(200).end().find('.astrisx').fadeIn(100);
        messageError=true;

    }
    else{

        $(this).css('border','1px solid #080').parent().find('.custom-alert').fadeOut(200).end().find('.astrisx').fadeOut(100);
        messageError=false;

    }

    

}); 


$('.contact-form').submit(function(e) {

    if (userError===true||emailError===true||messageError===true){

         e.preventDefault();

         $('.username , .email, .message').blur();

    }
  
});

});