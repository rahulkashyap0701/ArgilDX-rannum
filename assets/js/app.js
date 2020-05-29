$(document).ready(function(){
  var arr = [];
  $("#abc").on('click',function(){
  getCount = $("#getCount").text();
  var ran =  Math.floor(Math.random() * (79 - 70 + 1) ) + 70;
  if(arr.length == '6'){
  console.log(arr);
  $("#abc").attr("disabled", 'disabled');
  $("#abc").addClass("button-out");
  }else{
  var getCountVal = getCount - 1;
  $("#getCount").html(getCountVal);
  $("#getRan").html('<p class="random-in" style="padding: 0px 5px 0px 5px;"> '+ran+' </p>');
  $("#getZero").remove();
  $("#getArr").append('<p class="text-bounce" style="padding: 0px 5px 0px 5px;"> '+ran+' </p>');
  arr.push(ran);
  }
  });
  });