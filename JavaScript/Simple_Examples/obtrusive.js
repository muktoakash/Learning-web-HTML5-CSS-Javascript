function getQuote() {
    // Create the arrays
    quotes = new Array(3);
    sources = new Array(3);

    // Initialize the arrays with quotes
    quotes[0] = "When I was a boy of 14, my father was so " +
        "ignorant ... but when I got to be 21, I was astonished " +
        "at how much he had learned in 7 years.";
    sources[0] = "Mark Twain";

    quotes[1] = " Everybody is ignorant. Only on different " +
        "subjects.";
    sources[1] = "Will Rogers";

    quotes[2] = "The say much nice things about people at " +
        "their funerals that it makes me sad that I'm going to " +
        "miss mine by just a few days.";
    sources[2] = "Garrison Keillor";

    // Get a random index into the arrays
    i = Math.floor(Math.random() * quotes.length);

    // Write out the quote as HTML
    document.write("<p style = 'background-color: #ffb6c1' >\"");
    document.write(quotes[i] + "\"");
    document.write("<em>-" + sources[i] + "</em>");
    document.write("</p>");
}
