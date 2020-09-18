$(document).ready(function() {

    //Set up date and appending to HTML
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $('todaysDate').append(today);
})