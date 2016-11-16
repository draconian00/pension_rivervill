$(document).ready(function() {
  // link_f_text();
  link_f_main();
  link_f_room_list();
  link_f_rooms();
  link_f_food();
  link_f_activities();
  link_f_location();
  link_f_reservation();
  link_f_community();

  //$('a[href="/default/login2.php?topmenu=login"]').hide()
});

function link_f_text() {
  var temp;
  $('header li.type-1 > a').on('mouseover', function() {
    temp = $(this).text();
    
    if (temp.match('BOOK')) {
      temp = $(this).html();
      $(this).html(`
        <i class="fa fa-plus-square" style="display:inline-block; margin-right:5px;"></i>예약 하기
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

function link_f_main() {
  $('.link_main').on('click', function() {
    location.href = url+'index.php';
  });
  $('.link_main_2').on('click', function() {
    location.href = url+'index2.php';
  });
}

function link_f_room_list() {
  $('.link_f_room_list').on('click', function() {
    location.href = url+"room_list2.php";
  });
}

function link_f_rooms() {
  $('.link_f_floor_1').on('click', function() {
    location.href = url+"rooms/family_1.php";
  });

  $('.link_f_floor_2').on('click', function() {
    location.href = url+"rooms/family_2.php";
  });

  // $('.link_f_family_room').on('click', function() {
  //   location.href = url+"rooms/family_room2.php";
  // });
}

function link_f_food() {
  $('.link_f_food').on('click', function() {
    location.href = url+"food2.php";
  });
}

function link_f_activities() {
  $('.link_f_activities_1').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities2.php?tab_1" || cur_url == url+"activities2.php?tab_2" || cur_url == url+"activities2.php?tab_3") {
      
      $('#tab_1').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities2.php?tab_1";  
    }
  });
  $('.link_f_activities_2').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities2.php?tab_1" || cur_url == url+"activities2.php?tab_2" || cur_url == url+"activities2.php?tab_3") {
        
      $('#tab_2').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities2.php?tab_2";
    }
  });
  $('.link_f_activities_3').on('click', function() {
    var cur_url = document.URL;
    if (cur_url == url+"activities2.php?tab_1" || cur_url == url+"activities2.php?tab_2" || cur_url == url+"activities2.php?tab_3") {
      
      $('#tab_3').click();

      window.scrollTo(0, 704);
    } else {
      location.href = url+"activities2.php?tab_3";
    }
  });
}

function link_f_location() {
  $('.link_f_location').on('click', function() {
    location.href = url+"location2.php";
  });
}

function link_f_reservation() {
  
  $('.link_f_reserve_info').on('click', function() {
    location.href = url+'reserve_info2.php';
  });
  $('.link_f_reservation').on('click', function() {
    location.href = url+'reservation2.php';
  });
  $('.link_f_login').on('click', function() {
    location.href = url+'login2.php';
  });
  $('.link_f_check').on('click', function() {
    location.href = url+'check2.php';
  });
}

function link_f_community() {
  $('.link_f_community').on('click', function() {
    location.href = url+'community/notice2.php';
  });
  $('.link_f_community_1').on('click', function() {
    location.href = url+'community/notice2.php';
  });
  $('.link_f_community_2').on('click', function() {
    location.href = url+'community/post2.php';
  });
  $('.link_f_community_3').on('click', function() {
    location.href = url+'community/inquiry2.php';
  });
}
