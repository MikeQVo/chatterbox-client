var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  render: function() {

    },


    // for each room 
    //render each MessagesView 
    renderRoom: function(name){
      
      this.$select.append(`<div class="${name}">${name} Room</div>`);
    }
}
