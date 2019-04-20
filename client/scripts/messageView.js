var MessageView = {

  render: function(message){
    console.log(message);
    var {username, text, roomname} = message;
    
    var template = `<div class="chat">
                      <div class="username">${username}</div>
                      <div>${text}</div>
                    </div>`
    return template;
    
  }
};

// var MessageView = {

//   render: _.template(`
//       <!--
//       <div class="chat">
//         <div class="username"></div>
//         <div></div>
//       </div>
//       -->
//     `)

// };


// const { username, text, roomname} = message; 

// this.$chats.append(`<div class="chat">
// <div class="username">${username}</div>
// <div>${text}</div>
// </div>`);

