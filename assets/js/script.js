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



setCurrentDate();




// add event listeners

$(".saveBtn").on("click", function() {
    
    console.log("saved!");



});






