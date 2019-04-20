var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  


  initialize: function() {
    App.username = window.location.search.substr(10);
    console.log("username", App.username)
    FormView.initialize();
    RoomsView.initialize("Home"); //set user unique 
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // App.post(console.log('sucess'))
    
    
  },
  
  
  //add a setInterval to this to do so 
  fetch: function(callback = ()=>{    //fetch(callback())  function(parse.readall() )
    //spinner
  }) {
    Parse.readAll((data) => {

      var messageArray = data.results.slice();

      for(var i = 0; i < 20; i++) {
        MessagesView.renderMessage(messageArray[i]);
      }
  

       

      
    // send this information  messagesView
    // update messagesView or messageView MessagesView.render()
      // examine the response from the server request:
      // console.log("where is this, ", data);

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
  }
};
