//displays the current day
let timeBlockContainer = $(".container");
let todaysDateEl = $("#currentDay");

//Generates the current date
todaysDateEl.text(moment().format("dddd, MMMM Do"));

//generates time blocks
var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour1 = $('#01');
var hour2 = $('#02');
var hour3 = $('#03');
var hour4 = $('#04');
var hour5 = $('#05');

//sets each variable (time block) to the id attribute
function setPlanner() {
    todaysDateEl.text(moment().format("dddd, MMMM Do"));
    $(".timeblock").each(function() {
        var id = $(this).attr("id");

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();

//varialbe equals the id attribute given to the save button
var saveBtn = $(".saveBtn");

//on button click the time and text in the text area are saved to the local storage
saveBtn.on("click", function() {
    event.stopPropogation();
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});