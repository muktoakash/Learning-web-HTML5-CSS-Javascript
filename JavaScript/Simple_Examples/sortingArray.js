// initialize the counter and the array
var numberNames = 0;
var names = new Array();

function sortNames() {
    // Get the name form the text field
    theName = document.theForm.newName.value;

    // Add the name to the array
    names[numberNames] = theName;

    // Increment the counter
    numberNames++;

    // Sort the array
    names.sort();

    document.theForm.sorted.value = names.join("\n");
}
