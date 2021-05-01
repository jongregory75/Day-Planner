$(document).ready(function () {
  //Generates Date for current day in header
  $("#currentDay").text(moment().format("dddd, MMMM Do  YYYY"));

  //event handler for save button
  $(".saveBtn").on("click", function () {
    var value = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");
    //put any description input into local storage
    localStorage.setItem(time, value);
  });

  //build out local storage for each time block
  $("#hour-9 .description").val(localStorage.getItem("hour-9", value));
  $("#hour-10 .description").val(localStorage.getItem("hour-10", value));
  $("#hour-11 .description").val(localStorage.getItem("hour-11", value));
  $("#hour-12 .description").val(localStorage.getItem("hour-12", value));
  $("#hour-13 .description").val(localStorage.getItem("hour-13", value));
  $("#hour-14 .description").val(localStorage.getItem("hour-14", value));
  $("#hour-15 .description").val(localStorage.getItem("hour-15", value));
  $("#hour-16 .description").val(localStorage.getItem("hour-16", value));
  $("#hour-17 .description").val(localStorage.getItem("hour-17", value));
});

$("#btn").on("click", function () {
  var id = $(this).aattr("data-id");
  var text = $("#" + id).val();
  localStorage.setItem(id, text);
});

var currentHour = moment().hour();
console.log(currentHour);

var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
