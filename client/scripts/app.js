var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomsArray: [],
  friendsList: [],

  initialize: function() {
    App.username = window.location.search.substr(10);
 
    FormView.initialize();
    RoomsView.initialize(App.roomsArray);
    MessagesView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
  },
  
  
  //add a setInterval to this to do so 
  fetch: function(callback = ()=>{    //fetch(callback())  function(parse.readall() )
       
  }) {
    Parse.readAll((data) => {
      var messageArray = data.results.slice();

      for(let i=0; i<21; i++){
        MessagesView.renderMessage(messageArray[i])
      }
     Friends.addListener()
      callback();
    });
 
  },

  //POST request 
  // add: function()
  post: function(callback = ()=>{ 
    
  }) {
    Parse.create(Messages, function() {
      

      callback();
    });
  },
  
  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  addNewRoom: function(roomname) {
    
    App.roomsArray.push(roomname)
    RoomsView.renderRoom(roomname)
  },

  addNewFriend: function(friendName){
    if((App.friendsList.indexOf(friendName) === -1)){
      Friends.toggleStatus(friendName);
      App.friendsList.push(friendName);
    } 
    
    
    console.log(App.friendsList)
  }
};

