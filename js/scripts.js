$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    $("ul#list").empty();
    var numberInput = parseInt($("#number").val());
    var numList = [];

    for (var i = 1; i <= numberInput; i++) {

      if (i % 15 === 0) {
        var pingPong = "Ping-Pong";
        numList.push(pingPong);
      }
      else if (i % 5 === 0) {
        var pong = "Pong";
        numList.push(pong);
      }
      else if (i % 3 === 0) {
        var ping = "Ping";
        numList.push(ping);
      }
      else {
        numList.push(i);
      }

      console.log(numList);
      $("ul#list").append("<li>" + numList[i-1] + "</li>");

    }

    $("#number").val("");
  });
});





// $(document).ready(function() {
//
//   var number = ;
//
//   var pong = function(number) {
//     var list = [];
//     if (isNaN(number)) {
//
//       alert ("you must enter a valid number");
//
//     }
//     else {
//
//       for (var index = 1; index <= number; index++) {
//         if (index % 15 === 0) {
//           console.log("something is happening");
//           var pingPong = number[index];
//           pingPong = "Ping-Pong";
//           list.push(pingPong);
//         }
//
//          else {
//          list.push(index);
//        }
//        console.log(list);
//       }
//     }
//   }
// });

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
