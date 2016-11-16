var room_function = function() {
  $('#sub_img_1').click(function() {
    var src = $(this).attr('src')
    $('#main_img').attr('src', src);

    $('.sub-img-div').css('border', 'none');
    $('.sub-img-div img').removeClass('selected_sub_img');
    $(this).addClass('selected_sub_img');
    var div = $(this).parent();
    div.css('border', 'solid 10px rgba(255,255,255,0.6)');
    
    $('#comment_2').hide();
    $('#comment_3').hide();
    $('#comment_1').show();
  });
  $('#sub_img_2').click(function() {
    var src = $(this).attr('src')
    $('#main_img').attr('src', src);

    $('.sub-img-div').css('border', 'none');
    $('.sub-img-div img').removeClass('selected_sub_img');
    $(this).addClass('selected_sub_img');
    var div = $(this).parent();
    div.css('border', 'solid 10px rgba(255,255,255,0.6)');
    
    $('#comment_1').hide();
    $('#comment_3').hide();
    $('#comment_2').show();
  });
  $('#sub_img_3').click(function() {
    var src = $(this).attr('src')
    $('#main_img').attr('src', src);

    $('.sub-img-div').css('border', 'none');
    $('.sub-img-div img').removeClass('selected_sub_img');
    $(this).addClass('selected_sub_img');
    var div = $(this).parent();
    div.css('border', 'solid 10px rgba(255,255,255,0.6)');
    
    $('#comment_1').hide();
    $('#comment_2').hide();
    $('#comment_3').show();
  });
}

$(document).ready(function() {
  room_function();
});