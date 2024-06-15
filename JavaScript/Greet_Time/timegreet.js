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
