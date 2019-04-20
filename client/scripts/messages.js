var Messages = {

  text: null,
  username: null,
  roomname: null
  
};

Messages.formListener = function() {

  $("#send").on('submit' ,(function(event){
  
    event.preventDefault();
    var text = $('#message').val();
    Messages.text = _.escape(text)
    Messages.username = window.location.search.substr(10)
    Messages.room = window.RoomsView.$select.text()
    window.App.post(() => console.log('message submitted!!! ', Messages));
    window.App.fetch((()=> window.App.initialize()));
    // window.App.initialize()
  }));

}
