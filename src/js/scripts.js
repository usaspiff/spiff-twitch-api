//RUN OUR JQUERY
//var following = [];
$(document).ready(function() {

  //FREE CODE CAMP STREAM INFO AND STATUS API CALL
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp/",
    headers:{
      'Client-ID':'gzqams08n9bv5l6hup55m793ydw7sa'
    },
success: function(data1) {
    if (data1.stream === null) {
      $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
    } else {
      $("#fccStatus").html("Free Code Camp is currently ONLINE!");
    }
  }
  });

   $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers:{
      'Client-ID':'gzqams08n9bv5l6hup55m793ydw7sa'
    },
success: function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var displayName = data2.follows[i].channel.display_name;
      var logo = data2.follows[i].channel.logo;
      var status = data2.follows[i].channel.status;
      if(logo==null){
        logo = "http://www.wbexcise.gov.in/Images/logo.jpeg";
      }
      if(status==null){
        status = "Status unknown";
      }
          $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<a href='https://twitch.tv/"+displayName+"'>" + "<img src='" + logo + "'>" + "</a>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
   }
}
   });
    var deletedFollowers=['brunofin', 'comster404'];
    for (var i = 0; i < deletedFollowers.length; i++) {
      $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers:{
      'Client-ID':'gzqams08n9bv5l6hup55m793ydw7sa'
    },
error: function(data3) {
          var logo = "http://www.userlogos.org/files/logos/jumpordie/trakt_01.png";
        var displayName= data3.statusText;
        var status = data3.status;
        $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }

  });
    }
});
