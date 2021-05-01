//Generates Date for current day in header
$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMMM Do  YYYY"));

  function checkTime() {
    //create currentHour for background color logic
    var currentHour = moment().hours();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      //check the currentHour vs blockHour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  //event handler for save button
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");
    console.log(time);
    console.log(value);
    //put any description input into local storage
    localStorage.setItem(time, value);
  });

  //   //build out local storage for each time block
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  checkTime();
});
