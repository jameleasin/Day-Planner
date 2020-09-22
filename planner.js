//displays the current day
let timeBlockContainer = $(".container");
let todaysDateEl = $("#currentDay");

//Generates the current date
todaysDateEl.text(moment().format("dddd, MMMM Do"));

//generates time blocks
let timesArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//for loop for the length of the array