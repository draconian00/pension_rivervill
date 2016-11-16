$(function() {
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    var res_num = $(this).attr('data-res');
    var res_id = '#res_' + res_num;

    $('.res-content').removeClass('active');
    $(res_id).addClass('active');
  });
});