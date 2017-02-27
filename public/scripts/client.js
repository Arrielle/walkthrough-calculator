// console.log('client is sourced');

$(document).ready(function(){
  var num0 = '';
  var num1 = '';
  var operator = '';
  var captureNum1 = false;

// console.log('jquery is sourced correctly');
$('#clearButton').on('click', function(){
  //empty inputs
  $('#num0').val('');
  $('#num1').val('');
  //empty the display
  $('#outputP').text('');

});

$('.operatorButton').on('click', function(){
  //what type of operator is this?
  if(num0 != ''){
    // capture the num1;
    captureNum1 = true;
  }
  operator = $(this).data('operator');
});//ends operator on click

$('.numberButton').on('click', function(){
  //get number
  var myNumber = $(this).data('value');

  if(captureNum1){
    num1 += myNumber;
  } else{
    num0 += myNumber;
  }
    console.log('num0: ', num0, 'num1: ', num1);

});//end number on click

$('#equalsButton').on('click', function(){
  var objectToSend = {
    x: num0,
    y: num1,
    type: operator
  };//end object to send

  console.log('object to send', objectToSend);
  $.ajax({
    type: 'POST',
    url: '/math',
    data: objectToSend,
    success: function(response){
      console.log('back from ajax with: ', response.answer);
      //recieve and answer response.answer
      //display on DOM
      $('#outputP').text(response.answer);
    }//end success
  });//end ajax post
});//ends equals click


});//ends doc.ready
