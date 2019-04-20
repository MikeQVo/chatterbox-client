var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function(message) {
    // renderMessage: func => MessageView
  /*messagesCotainer   <div class = $(room.name)Box>
      foreach MessageView.render
    </div>
      */
    //username - text
     

  //   this.$chats.append(`<div class="chat">
  //   <div class="username">${username}</div>
  //   <div>${text}</div>
  //  </div>`);


    
  },

  renderMessage: function(message){

  const { username, text, roomname} = message; 

    this.$chats.append(`<div class="chat">
    <div class="username">${username}</div>
    <div>${text}</div>
    </div>`);
  }


};

// var message1 = {
//   username: 'Mel Brooks',
//   text: 'Never underestimate the power of the Schwartz!',
//   roomname: 'lobby'
// };


// |- - - - - - - - --  -- - - - - -|
// hi im twitter [submit]