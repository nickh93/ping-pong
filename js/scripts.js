$(document).ready(function() {

  var number;

  var pong = function(number) {
    var list = [];
    if (isNaN(number)) {

      alert ("you must enter a valid number");

    }
    else {

      for (var index = 1; index <= number; index++) {
        if (index % 15 === 0) {
          var pingPong = number[index];
          pingPong = "Ping-Pong";
          list.push(pingPong);
        }

         else {
         list.push(index);
       }

      }
    }
  }
});

//user-interface logic
// $("#input").submit(function(event) {
//   event.preventDefault();
//
//   var inputNumber = parseInt($("#number").val());
//
//   var pingPongList = pong(inputNumber);
//
//   $("result").show();
//   // $("list").append("<li>" + pingPongList + "</li>");

// });
