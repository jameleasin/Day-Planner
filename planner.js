$(document).ready(function() {

    //Set up date and appending to HTML
    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $('todaysDate').append(today);

    var now = parseInt(moment().format('HH'));
    console.log(now)

    var $text9AM = $("#text9AM");
    var $text10AM = $("#text12AM");
    var $tex11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");

    $("textarea").each(function() {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("bg-gray");
        }

        if (name > now) {
            $(this).addClass("bg-green")
        }

        if (name === now) {
            $(this).addClass("bg-red")
        }
    })
})