// declare global variables
var currentHour = moment().hour();
var currentDate;



// set the values of each hour's event from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


// declare function setCurrentDate
// (in retrospect, it's probably overkill to put this in a function...?)
function setCurrentDate() {
    currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#current-date").text(currentDate);

}

// calls function setCurrentDate
setCurrentDate();


// waits until the document is fully loaded before running the enclosed code
$(document).ready(function () {

    // declare function used to set the color of each block based on time
    function setBlockStatus() {

        // creating jQuery for-each loop
        $(".time-block").each(function() {

            // declare variable blockHour equal to the ID of each time block, which I made equal to its corresponding hour in military time
            var blockHour = parseInt($(this).attr("id"));

            // the following three if statements compare the block's time to the current hour from momentJS to determine the proper color for it
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

    // call setBlockStatus function
    setBlockStatus();



    // add event listener for save buttons
    $(".saveBtn").on("click", function() {
        
        // capture reference to the block's time and user event
        var time = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();

        // store the data in local storage
        localStorage.setItem(time, event);

    });

    // add event listener for clear buttons
    $(".clearBtn").on("click", function() {
        
        // capture reference to the block's time and user event
        var time = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();

        // clear the selected time and event from local storage
        localStorage.removeItem(time, event);

        // refreshes the page so the deleted event will no longer be displayed
        location.reload();
        

    });



});
