// variables for text content and save buttons
var content = $("textarea");
var savBtns = $(".saveBtn")

// local storage variables
var listItems = JSON.parse(localStorage.getItem("listItems") || "[]");

// add current date to page
var currentDate = moment().format("MMMM DD, YYYY");
$("#currentDay").text(currentDate);
console.log(currentDate);

// current hours for past/present/future
var currentTime = moment().hour();
console.log(currentTime);

// testing 1st button
$("#saveBtn1").on("click", function(){
    console.log("clicked");
});

// time blocks color coded to indicate past, present, future

// save events to local storage