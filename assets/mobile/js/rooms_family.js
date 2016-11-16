$(function() {

  var rooms_swiper = new Swiper ('#room_a_swiper', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  $('.rooms-nav-btn').click(function() {
    $('.rooms-nav-btn').removeClass('active');
    $(this).addClass('active');

    var room_class = '.rooms-content.room-'+$(this).attr('data-room');
    var room_swiper_id = '#room_'+$(this).attr('data-room')+'_swiper';
    var area_info = '#room_area_info_'+$(this).attr('data-room');
    
    $('.rooms-content').removeClass('active');
    $(room_class).addClass('active');

    $('.area-info').removeClass('active');
    $(area_info).addClass('active');

    rooms_swiper = new Swiper (room_swiper_id, {
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  });

  $('.faq-header-sub').click(function() {
    var faq_num = $(this).attr('data-faq');
    var faq_content_class = '.faq-'+faq_num;

    $('.faq-content').removeClass('active');
    $(faq_content_class).addClass('active');
  })
});