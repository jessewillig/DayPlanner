// variables for text content and save buttons
var content = $("textarea");
var savBtns = $(".saveBtn")

// local storage variables
var listItems = JSON.parse(localStorage.getItem("listItems") || "[]");

// time blocks color coded to indicate past, present, future
// add current date to page
var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);
console.log(currentDate);

// current hours for past/present/future
var currentTime = moment().hour();
console.log(currentTime);

// testing 1st button
$("#saveBtn1").on("click", function(){
    console.log("clicked");
});

// save events to local storage
// check local storage for anything already entered
function first() {
    var storedEvents = JSON.parse(localStorage.getItem("storedEvents"));

    if (storedEvents !== null) {
        listItems = array.assign(storedEvents, listItems);
    } else {
        return;
    }
};

// click event for save buttons to save to local storage
savBtns.on("click", function () {
    var userInput = $(this).prev().val();
    console.log(userInput);
    var currentHour = $(this).prev().attr("data-time");
    listItems[currentHour] = userInput;

    // local storage
    localStorage.setItem("listItems", JSON.stringify(listItems));
    $("#hour1 .text-input").val(localStorage.getItem("hour1"));
    $("#hour2 .text-input").val(localStorage.getItem("hour2"));
    $("#hour3 .text-input").val(localStorage.getItem("hour3"));
    $("#hour4 .text-input").val(localStorage.getItem("hour4"));
    $("#hour5 .text-input").val(localStorage.getItem("hour5"));
    $("#hour6 .text-input").val(localStorage.getItem("hour6"));
    $("#hour7 .text-input").val(localStorage.getItem("hour7"));
    $("#hour8 .text-input").val(localStorage.getItem("hour8"));
    $("#hour9 .text-input").val(localStorage.getItem("hour9"));
    $("#hour10 .text-input").val(localStorage.getItem("hour10"));
});

// function to identify colors of rows based on current hour
$.each((content), function () {
   var hourData = $(this).attr("data-time");
   console.log($(this)); 
   if (parseInt(hourData)===currentTime) {
       $(this).removeClass("past future");
       $(this).addClass("current");
   }
   if (hourData < currentTime) {
       $(this).removeClass("current future");
       $(this).addClass("past");
   }
   if (hourData > currentTime) {
       $(this).removeClass("past current");
       4(this).addClass("future");
   }
});