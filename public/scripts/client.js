// console.log('client is sourced');

$(document).ready(function(){
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
  var operator = $(this).data('operator');
  console.log('button has been pressed: ', operator);
  //get user Inputs
  var num0 = $('#num0').val();
  var num1 = $('#num1').val();
  //assemble object to send to the server
  var objectToSend = {
    x: num0,
    y: num1,
    type: operator
  };//end object to send
  $.ajax({
    type: 'POST',
    url: '/math',
    data: objectToSend,
    success: function(response){
      console.log('back from ajax with: ', response);
      //recieve and answer response.answer
      //display on DOM
      $('#outputP').text(response.answer);
    }//end success
  });//end ajax post
  //receive an answer
  //display answer
  console.log('objecttosend: ', objectToSend);
});//ends operator on click

});//ends doc.ready
