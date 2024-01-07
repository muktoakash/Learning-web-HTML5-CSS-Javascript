now = new Date();
localTime = now.toString();
utcTime = now.toGMTString();
document.write("<p><strong>Local Time:</strong> "
    + localTime + "</p>");
document.write("<p><strong>UTC time:</strong> "
    + utcTime + "</p>");
