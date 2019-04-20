var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    this.$chats.html('<div class="messageContainer"></div>');
  },

  renderMessage: function(messageArray){
    //prehaps do escape here https://underscorejs.org/#escape
    // console.log(messageArray)
    var htmlString = '';
    for(var i = 0; i < 20; i++) {
      // console.log(messageArray[i])
      htmlString+=(`<div class="message">${MessageView.render(messageArray[i])}</div>`);
      // console.log(htmlString)
    };
    // console.log(htmlString)
    $('.messageContainer').append(htmlString);
    
  }


};

