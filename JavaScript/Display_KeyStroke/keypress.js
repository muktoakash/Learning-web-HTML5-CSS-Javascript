function displayKey(e) {
    //which key was pressed?
    var keycode = e.which;
    character = String.fromCharCode(keycode);

    // find the object for the destination paragraph
    var key_paragraph = document.getElementById('keys');

    // add the character to the paragraph
    key_paragraph.innerHTML += character;
}

document.addEventListener("keypress", displayKey);
