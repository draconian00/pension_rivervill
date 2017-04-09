$(function() {
  $('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    var act_num = $(this).attr('data-act');
    var act_id = '#act_' + act_num;

    $('.act-content').removeClass('active');
    $(act_id).addClass('active');
  });
});