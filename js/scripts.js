// Program should return true for years divisible by 4
var leapyear = function(year) {
  if  ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    return true;
}
  else {
    return false;
  }
}

$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapyear(year);
    console.log(result);


    $(".year").text(year);

    if (result === false) {
      $(".not").text("not");

    }

    else {
      $(".not").text("");
    }
    $("#result").show();
  });
});
