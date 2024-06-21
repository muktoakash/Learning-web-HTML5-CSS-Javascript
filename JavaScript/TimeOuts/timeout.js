var counter = 0;

// call Update function 2 seconds after the first load
timeoutID = window.setTimeout("Update();", 2000);

function Update() {
    counter++;
    var textField = document.getElementById("showText");
    textField.innerHTML = "The counter is now at " + counter;

    // set another timeout for the next count
    timeoutID = window.setTimeout("Update();", 2000);
}

// set event listeners for the buttons
document.getElementById("restart").addEventListener("click", function () {
    counter = 0;
    Update();
});
document.getElementById("stop").addEventListener("click", function () {
    window.clearTimeout(timeoutID);
})
