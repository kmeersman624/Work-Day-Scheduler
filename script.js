var time = moment();
var currentHour = time.format("H");

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

// // loop though textarea to get item from local storage
// for (var hour in notes) {
// for (var i = 0; i < notes.length; i++) {
//     var dataHour = localStorage.getItem(notes[i]);
// }
//save button - local storage
 //eventlistener
$(".saveBtn").click(function() {
    event.preventDefault();
    var time = $(this).parent().attr("data-hour");
    console.log("time is" + time);
    var value = $(this).siblings(".description").val();
    console.log(value);
    localStorage.setItem(time, value);
});

$("#hour 9 .description").val(localStorage.getItem("9"));
$("#hour 10 .description").val(localStorage.getItem("10"));
$("#hour 11 .description").val(localStorage.getItem("11"));
$("#hour 12 .description").val(localStorage.getItem("12"));
$("#hour 13 .description").val(localStorage.getItem("13"));
$("#hour 14 .description").val(localStorage.getItem("14"));
$("#hour 15 .description").val(localStorage.getItem("15"));
$("#hour 16 .description").val(localStorage.getItem("16"));
$("#hour 17 .description").val(localStorage.getItem("17"));

