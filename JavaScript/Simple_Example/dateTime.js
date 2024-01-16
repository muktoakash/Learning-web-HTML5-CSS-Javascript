now = new Date();
localTime = now.toString();
utcTime = now.toGMTString();
document.write("<p><strong>Local Time:</strong> "
    + localTime + "</p>");
document.write("<p><strong>UTC time:</strong> "
    + utcTime + "</p>");
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h2>");
document.write(hours + ":" + mins + ":" + secs);
document.write("</h2>")
