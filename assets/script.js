// variables for text content and save buttons
var content = $("textarea");
var savBtns = $(".saveBtn")

// local storage variables
var listItems = JSON.parse(localStorage.getItem("listItems") || "[]");

// add current date to page
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);
console.log(currentDate);

// time blocks color coded to indicate past, present, future

// save events to local storage