var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(roomname) {
    this.$select.prepend(`<option value="${roomname}">${roomname}</option>`)

  },


  // for each room 
  //render each MessagesView 
  renderRoom: function(name){
    
    this.$select.append(`<div class="${name}">${name} Room</div>`);
  }
}
