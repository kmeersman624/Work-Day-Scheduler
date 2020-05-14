var time = moment();
var currentHour = time.format("H");

//Display date in p id="currentDay" class="lead"
//updates live date/time
const date = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(date);

$(".time-block").each(function () {
  const currentHour = parseInt(moment().format("H"));
  const hour = parseInt($(this).attr("data-hour"));

  if (hour < currentHour) {
    //add past class
    //gray is time past
    $(this).find("textarea").addClass("past");
  } else if (hour > currentHour) {
    //add future class
    //green is future time
    $(this).find("textarea").addClass("future");
  } else {
    //add current class
    //red is current time
    $(this).find("textarea").addClass("present");
  }
  console.log(hour, currentHour);
});

var notes = {
  9: "Hello World",
  10: "Test",
  11: "Class",
  12: "Lunch",
  13: "abc",
  14: "def",
  15: "ghi",
  16: "jkl",
  17: "done",
};

//save button - local storage
//eventlistener
$(".saveBtn").on("click", function () {
  event.preventDefault();
  var time = $(this).parent().attr("data-hour");
  console.log("time is" + time);
  var value = $(this).siblings(".description").val();
  console.log(value);
  localStorage.setItem(time, value);
});
console.log(localStorage.getItem("9"));

$("#hour_9 .description").val(localStorage.getItem("9"));
$("#hour_10 .description").val(localStorage.getItem("10"));
$("#hour_11 .description").val(localStorage.getItem("11"));
$("#hour_12 .description").val(localStorage.getItem("12"));
$("#hour_13 .description").val(localStorage.getItem("13"));
$("#hour_14 .description").val(localStorage.getItem("14"));
$("#hour_15 .description").val(localStorage.getItem("15"));
$("#hour_16 .description").val(localStorage.getItem("16"));
$("#hour_17 .description").val(localStorage.getItem("17"));
