$(document).ready(function() {
  $("#designs").click(function(){
    $("#designs-p").show();
  });
  $("#designs").click(function(){
    $("#designs").hide();
  });
  $("#designs-p").click(function(){
    $("#designs").show();
  });
  $("#designs-p").click(function(){
    $("#designs-p").hide();
  });

  $("#dev").click(function(){
    $("#dev-p").show();
  });
  $("#dev").click(function(){
    $("#dev").hide();
  });
  $("#dev-p").click(function(){
    $("#dev").show();
  });
  $("#dev-p").click(function(){
    $("#dev-p").hide();
  });

  $("#pm").click(function(){
    $("#pm-p").show();
  });
  $("#pm").click(function(){
    $("#pm").hide();
  });
  $("#pm-p").click(function(){
    $("#pm").show();
  });
  $("#pm-p").click(function(){
    $("#pm-p").hide();
  });
});
$(document).ready(function(){
    var wrap = ['.port0','.port1','.port2','.port3','.port4','.port5','.port6','.port7'];
     wrap.forEach(y => {
       var indexofwrap = wrap.indexOf(y);
       var overlay=['.laycon1','.laycon2','.laycon3','.laycon4','.laycon5','.laycon6','.laycon7','.laycon8'];
       $(y).mouseover(function() {
         $(overlay[indexofwrap]).show();
         }).mouseout(function() {
           $(overlay[indexofwrap]).hide();
       })
       })
     $("#contact-us").submit(function() {
      var nameInput = $("input#name").val();
  
      var emailInput = $("input#email").val();
      var messageInput = $("textarea#message").val();
  
      alert(nameInput + " we have received your message. Thank you for reaching out to us.");
  
    })
  })

