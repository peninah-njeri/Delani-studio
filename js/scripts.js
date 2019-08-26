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