var menu_function = function() {
  $('#menu_open').click(function() {
    $('#menu_div').show('slow');
  });
  $('#menu_close').click(function() {
    $('#menu_div').hide();
  })
}

$(document).ready(function() {
  menu_function();
});