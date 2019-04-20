var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',


  

  initialize: function() {
    App.username = window.location.search.substr(10);
    console.log("username", App.username)
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.post(Messages, alert('sucess'))
    
    
  },
  
  
  //add a setInterval to this to do so 
  fetch: function(callback = ()=>{    //fetch(callback())  function(parse.readall() )
    //spinner
  }) {
    Parse.readAll((data) => {
        console.log(data)
      
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
    Parse.create((message) => {
      

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
