// Get the current date
now = new Date();

// Split into hours, minutes, seconds
hourOfDay = now.getHours();
minuteOfHour = now.getMinutes();
secondsOfMinute = now.getSeconds();

// Display the time
document.write("<h2>");
document.write(hourOfDay + ":" + minuteOfHour + ":" + secondsOfMinute);
document.write("</h2>");

// Display a greeting
// open the paragraph
document.write("<p>");

// change the greetings
if (hourOfDay < 10) {
    document.write("Good Morning.");
} else if ((hourOfDay >= 14) && (hourOfDay <= 17)) {
    document.write("Good Afternoon.");
} else if (hourOfDay >= 17) {
    document.write("Good Evening.");
} else {
    document.write("Good day.");
}

// close the paragraph
document.write("<p");
