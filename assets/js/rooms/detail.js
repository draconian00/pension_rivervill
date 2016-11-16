function room_location(el, name) {
  // /base_1/img/rooms/common/img1.jpg
  $(el).attr('src', '/base_1/img/rooms/common/'+name+'.jpg')
}

function reset_location(el) {
  $(el).attr('src', '/base_1/img/rooms/common/img1.jpg')
}

function room_f_location(el, name) {
  $(el).attr('src', '/base_1/img/family/room_common/'+name+'.jpg')
}
function reset_f_location(el) {
  $(el).attr('src', '/base_1/img/family/room_common/base.jpg')
}