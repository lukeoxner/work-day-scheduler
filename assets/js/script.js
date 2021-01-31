// create references
    // save buttons
    // descriptions
    // hours

var saveBtn = document.querySelector(".saveBtn");


// declare global variables



// declare functions

function setCurrentDate() {
    var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#current-date").text(currentDate);

}

function setCurrentHour() {
    var currentHour = moment().hour();
}

function setBlockStatus() {

    $(".time-block").each(function() {

        var blockHour = parseInt($(this).attr("id"));

        if (currentHour > blockHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        
        if (currentHour === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        
        if (currentHour < blockHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })



}



setCurrentDate();
setCurrentHour();
setBlockStatus();



// add event listeners

$(".saveBtn").on("click", function() {
    
    console.log("saved!");



});






