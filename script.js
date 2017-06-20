$(function(){
   var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin","comster404"]
  $.each(channels, function(index, value){
    
      $.ajax({
            url:'https://wind-bow.glitch.me/twitch-api/streams/' + value + '?callback=?',
            type: "GET",
            dataType: 'jsonp'
        }).done(function(data){
          console.log(data);
  var channelName = value;
  var logo;   
          
          var statusDetails, link, stream; 
          link =   "https://www.twitch.tv/" + value;

         
            if(data.stream == null){
                  statusDetails = "offline";
                  logo = "https://lh6.googleusercontent.com/-IeqGfzvvBJM/AAAAAAAAAAI/AAAAAAAAAFc/CNPxLONlaZ4/photo.jpg"
                }

                else if(data.stream == undefined){
                 status == "account not be found"
                }
                else{
                  statusDetails = data.stream.channel.game + ": " + data.stream.channel.status;
                  logo = data.stream.channel.logo;
                  
                }


                
                
               
               var message = `
               <div class="row">
    <div class="col-sm-4 channels"><img id="logo" src="${logo}"></div>
  <div class="col-sm-4 channels"><p><a href="${link}">${channelName}</a></p></div>
  <div class="col-sm-4 channels">${statusDetails}</div>
  
  </div>
               ` 
          $(".display").append(message);
    
          
        })
  })
   
    
});
