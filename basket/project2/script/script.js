$(document).ready(function(){

    $('.pro-btn').click(function(){
      if($(this).hasClass('disabled')){
        
      } else {
        $('.cart-text').removeClass('wobble');
        $(this).addClass('disabled');
        $(this).find('span').html('Added');
        $('.no-product').hide();
        var CurrentProduct = $(this).parent('.pro-item-inner');
        var cloneCurrent = $(CurrentProduct).clone();
        var thisPrice = $(this).parent('.pro-item-inner').find('.pro-price').html().replace("$", "");
        $(cloneCurrent).appendTo('.cart-items');
      //$('.cart-close').fadeIn();
      //  $('.cart-items-wrap').slideDown();   
        var cartNumber = $('.cart-number').html();
        $('.cart-number').html(parseInt(cartNumber) + 1);
        $('.cart-total').show();
        var currentCartTotal = $('.cart-total span').html();
        if($(currentCartTotal) !== 0) {
          var newCartTotal = parseInt(currentCartTotal) + parseInt(thisPrice);    
        $('.cart-total span').html(newCartTotal);
          } else {
            $('.cart-total span').html(thisPrice);
          }
      $("body, html").animate({scrollTop: 0}, 'slow');
        $('.cart-text').addClass('wobble');
      }
    });
    $('.cart-text').click(function(){
       $('.cart-items-wrap').slideToggle();
      $('.cart-close').fadeToggle();
    });
    $(document).on('click', '.cart-close', function(){
       $('.cart-items-wrap').slideUp();
      $(this).fadeOut();
    });
    
     $(document).on('click', '.cart-items-wrap .pro-btn', function(){
       var removalID = $(this).parent('.pro-item-inner').attr('data-id');
       var thisPrice = $(this).parent('.pro-item-inner').find('.pro-price').html().replace("$", "");
       $(this).parent('.pro-item-inner').remove();     
       $('#'+removalID).find('.pro-btn').removeClass('disabled');
       $('#'+removalID).find('.pro-btn').find('span').html('Add to Cart');
       var cartNumber = $('.cart-number').html();    
        $('.cart-number').html(parseInt(cartNumber) - 1);
       var currentCartTotal = $('.cart-total span').html();
       var newCartTotal = parseInt(currentCartTotal) - parseInt(thisPrice);    
        $('.cart-total span').html(newCartTotal);
      if ($('.cart-items-wrap .pro-btn').length < 1) {
         $('.no-product').fadeIn();
         $('.cart-total').hide();
          setTimeout(function(){
            $('.cart-close').fadeOut();
            $('.cart-items-wrap').slideUp();
          }, 2000);
      }
    });
  });