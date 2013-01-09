// Swapbox
$(document).ready(function(){
  $('.swapbox-btn').click(function(){
    $(this).addClass('swapbox-active');
    $(this).children('.swapbox-element').appendTo('.swapbox-content').fadeIn();
    $('.swapbox-triggers').hide();
  });
  $('.swapbox-close').click(function(){
    $('.swapbox-triggers').fadeIn();
    $('.swapbox-content').children('.swapbox-element').hide().appendTo('.swapbox-active');
    $(this).removeClass('swapbox-active');
  });
});
