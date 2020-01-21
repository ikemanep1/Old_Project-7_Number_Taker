$(document).ready(function() {
  $(".user_input").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#number1").val());
    var countBy = parseInt($("#number2").val());
    if (isNaN(countTo) || isNaN(countBy)) {
      alert("please enter an actual number.");
    } else if (countTo < countBy) {
      alert("1st number must be bigger");
    } else if (countTo <= 0 || countBy <= 0) {
    alert("numbers must be positive, baby");
  } else {
    for (var index = 1; index <= countTo;  index+=countBy) {
      $(".results").append("<li>" + index + "</li>");
    }
  }
  console.log(countTo);
});
});
