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
    var currentHour = $(this).prev().attr.("data-time");
    listItems[currentHour] = userInput;

    // local storage
    localStorage.setItem("listItems", JSON.stringify(listItems));
    $("#hour1 .text-input").val(localStorage.getItem("hour1"));
    $("#hour2 .text-input").val(localStorage.getItem("hour1"));
    $("#hour3 .text-input").val(localStorage.getItem("hour1"));
    $("#hour4 .text-input").val(localStorage.getItem("hour1"));
    $("#hour5 .text-input").val(localStorage.getItem("hour1"));
    $("#hour6 .text-input").val(localStorage.getItem("hour1"));
    $("#hour7 .text-input").val(localStorage.getItem("hour1"));
    $("#hour8 .text-input").val(localStorage.getItem("hour1"));
    $("#hour9 .text-input").val(localStorage.getItem("hour1"));
    $("#hour10 .text-input").val(localStorage.getItem("hour1"));
});