// document initialize
$(document).ready(function() {
  mobile_detect();
  body_theme_init();
  all_rooms_btn();
});


function mobile_detect() {
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    
    location.href = "http://erivervillage.com/default/mobile/index_village.php";
  } else {
    console.log('pc access');
  }
}

// functions
function body_theme_init() {
  // $('body').attr('data-color','theme-1');
}

function all_rooms_btn() {
  $('#all_room_btn').on('mouseover', function() {
    $('#all_room_icon').attr('src', '/base_1/img/main/rooms/icon/room_icon_03_or_128.gif');
  }); 

  $('#all_room_btn').on('mouseout', function() {
    $('#all_room_icon').attr('src', '/base_1/img/main/rooms/icon/room_icon_03_w_128.gif');
  });

  $('#f_all_room_btn').on('mouseover', function() {
    $('#f_all_room_icon').attr('src', '/base_1/img/main/rooms/icon/room_icon_03_b_128.gif');
  });


  $('#f_all_room_btn').on('mouseout', function() {
    $('#f_all_room_icon').attr('src', '/base_1/img/main/rooms/icon/room_icon_03_w_128.gif');
  });
}