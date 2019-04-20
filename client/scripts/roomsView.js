var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(roomname) {
    // set roomname as a h3
    //pass rmessages array to messagesView => pass to messageView. Which renders messages 
    this.$select.append(`<option value="${roomname}">${roomname}</option>`)
  },

  render: function() {

    },


    // for each room 
    //render each MessagesView 
    renderRoom: function(name){
      
      this.$select.append(`<div class="${name}">${name} Room</div>`);
    }
}
