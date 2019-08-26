$(document).ready(function(){

  $('#image1').click(function(){
    $('.hide-me').filter('#designs-p').show(function(){
      $('#image1').hide();
    });
  });

  $('#designs-p').click(function(){
    $('#designs-p').hide();
    $('#image1').show();
  });
// image 2
  $('#image2').click(function(){
    $('.hide-me').filter('#dev-p').show(function(){
      $('#image2').hide();
    });
  });

  $('#dev-p').click(function(){
    $('#dev-p').hide();
    $('#image2').show();
  });
  // image 3
  $('#image3').click(function(){
    $('.hide-me').filter('#pm-p').show(function(){
      $('#image3').hide();
    });
  });

  $('#pm-p').click(function(){
    $('#pm-p').hide();
    $('#image3').show();
  });
});
// // hover portfolio
// $(document).ready(function(){
//   $(".laycon").hide();
//   $(".w-100").hover(function(){
//     $(this).find(".laycon").toggle(500);
//   })
// })

$(document).ready(function(){
$("#wk1").mouseenter(function(){
  $("#hideMe0").show();
}).mouseleave(function(){
  $("#hideMe0").hide();
})
$("#wk2").mouseenter(function(){
  $("#hideMe1").show();
}).mouseleave(function(){
  $("#hideMe1").hide();
})
$("#wk3").mouseenter(function(){
  $("#hideMe2").show();
}).mouseleave(function(){
  $("#hideMe2").hide();
})
$("#wk4").mouseenter(function(){
  $("#hideMe3").show();
}).mouseleave(function(){
  $("#hideMe3").hide();
})
$("#wk5").mouseenter(function(){
  $("#hideMe4").show();
}).mouseleave(function(){
  $("#hideMe4").hide();
})
$("#wk6").mouseenter(function(){
  $("#hideMe5").show();
}).mouseleave(function(){
  $("#hideMe5").hide();
})
$("#wk7").mouseenter(function(){
  $("#hideMe6").show();
}).mouseleave(function(){
  $("#hideMe6").hide();
})
$("#wk8").mouseenter(function(){
  $("#hideMe7").show();
}).mouseleave(function(){
  $("#hideMe7").hide();
})
})

//form
$("#submit").click(function(event){
  var name=$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
/** user logic interface */
  if((name!=="") && (email !== "") && (message !="")){
      alert(name + " ,We have received your message.Thank you for reaching out to us");
  }
  else 
  {
      alert("Fill the form please");
  }
  event.preventDefault();
});



