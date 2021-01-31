// create references
    // save buttons
    // descriptions
    // hours

var saveBtn = document.querySelector(".saveBtn");


// declare global variables
var currentHour = moment().hour();
var currentDate;




$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


// declare functions

function setCurrentDate() {
    currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#current-date").text(currentDate);

}
setCurrentDate();

$(document).ready(function () {

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

    setBlockStatus();



    // add event listeners

    $(".saveBtn").on("click", function() {
        
        var time = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();

        localStorage.setItem(time, event);

    });

    $(".clearBtn").on("click", function() {
        
        var time = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();

        localStorage.removeItem(time, event);

        location.reload();
        

    });



});
