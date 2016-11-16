$(document).ready(function() {
  // link_text();
  link_main();
  link_room_list();
  link_rooms();
  link_food();
  link_activities();
  link_location();
  link_reservation();
  link_community();

  //$('a[href="/default/login.php?topmenu=login"]').hide()
  function preViewPopup(num) {
    console.log(num);
  }
});

function link_text() {
  var temp;
  $('header li.type-1 > a').on('mouseover', function() {
    temp = $(this).text();
    
    if (temp.match('BOOK')) {
      temp = $(this).html();
      $(this).html(
        `<i class="fa fa-plus-square" style="display:inline-block; margin-right:5px;"></i>예약 하기
        <span class="fa fa-angle-down"></span>`);
    } else if (temp == 'HOME') {
      $(this).text('홈');
    } else if (temp == 'ROOMS') {
      $(this).text('객실');
    } else if (temp == 'FOOD') {
      $(this).text('먹기리');
    } else if (temp == 'ACTIVITIES') {
      $(this).text('즐길거리');
    } else if (temp == 'LOCATION') {
      $(this).text('오시는 길');
    } else if (temp == 'COMMUNITY') {
      $(this).text('커뮤니티');
    }

  });

  $('header li.type-1 > a').on('mouseout', function() {
    if (temp.match('BOOK')) {
      $(this).html(temp);
    } else {
      $(this).text(temp);  
    }
  });
}


var url = 'http://bakas001.cafe24.com/default/'

function link_main() {
  $('.link_main').on('click', function() {
    location.href = url+'index.php';
  });
  $('.link_main_2').on('click', function() {
    location.href = url+'index2.php';
  });
}

function link_room_list() {
  $('.link_room_list').on('click', function() {
    location.href = url+"room_list.php";
  });
}

function link_rooms() {
  $('.link_a_room').on('click', function() {
    location.href = url+"rooms/a_room.php";
  });

  $('.link_b_room').on('click', function() {
    location.href = url+"rooms/b_room.php";
  });

  $('.link_c_room').on('click', function() {
    location.href = url+"rooms/c_room.php";
  });

  // $('.link_family_room').on('click', function() {
  //   location.href = url+"rooms/family_room.php";
  // });
}

function link_food() {
  $('.link_food').on('click', function() {
    location.href = url+"food.php";
  });
}

function link_activities() {
  $('.link_activities_1').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities.php?tab_1" || cur_url == url+"activities.php?tab_2" || cur_url == url+"activities.php?tab_3") {
      
      $('#tab_1').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities.php?tab_1";  
    }
  });
  $('.link_activities_2').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities.php?tab_1" || cur_url == url+"activities.php?tab_2" || cur_url == url+"activities.php?tab_3") {
        
      $('#tab_2').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities.php?tab_2";
    }
  });
  $('.link_activities_3').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities.php?tab_1" || cur_url == url+"activities.php?tab_2" || cur_url == url+"activities.php?tab_3") {
      
      $('#tab_3').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities.php?tab_3";
    }
  });
}

function link_location() {
  $('.link_location').on('click', function() {
    location.href = url+"location.php";
  });
}

function link_reservation() {
  
  $('.link_reserve_info').on('click', function() {
    location.href = url+'reserve_info.php';
  });
  $('.link_reservation').on('click', function() {
    location.href = url+'reservation.php';
  });
  $('.link_login').on('click', function() {
    location.href = url+'login.php';
  });
  $('.link_check').on('click', function() {
    location.href = url+'check.php';
  });
}

function link_community() {
  $('.link_community').on('click', function() {
    location.href = url+'community/notice.php';
  });
  $('.link_community_1').on('click', function() {
    location.href = url+'community/notice.php';
  });
  $('.link_community_2').on('click', function() {
    location.href = url+'community/post.php';
  });
  $('.link_community_3').on('click', function() {
    location.href = url+'community/inquiry.php';
  });
}


