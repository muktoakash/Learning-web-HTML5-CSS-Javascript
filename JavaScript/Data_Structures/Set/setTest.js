// stackTest.js
// Does unit test on the Set data structure in stack.js
// with the help of stackTest.html for visualization

// Import
// import { Set } from "./stack.js";

// Global Variables
let newSet = new SetOfStrings();
const txt = document.getElementById("introFormSet").textContent;

// window.onload = creation();

// Create a new Set when button is pushed
let createButton = document.getElementById("createSet");
createButton.addEventListener("click", () => {
    creation();
});

var count = 0;

function creation() {


    if (count === 0) {
        document.getElementById("remove").style.display = "none";
    }
    count++;


    newTxt = "An empty Set has been initialized. Now " + txt;
    document.getElementById("pIntroFormSet").innerText = newTxt;
    document.getElementById("destroySet").disabled = false;
    document.getElementById("pushSetButton").disabled = false;
    document.getElementById("popSetButton").disabled = false;
    document.getElementById("allSetButton").disabled = false;
    document.getElementById("createSet").disabled = true;

    displayForm();
}

// Destroy the Set when button is clicked
document.getElementById("destroySet").addEventListener("click", destruction)

function destruction(){
    newSet.destroy();
    newTxt = "Set has been destroyed. Create a new Set. Then " + txt;
    document.getElementById("pIntroFormSet").innerText = newTxt;
    document.getElementById("createSet").disabled = false;
    document.getElementById("destroySet").disabled = true;
    document.getElementById("pushSetButton").disabled = true;
    document.getElementById("popSetButton").disabled = true;
    document.getElementById("allSetButton").disabled = true;

    // Reset the form;
    document.getElementById("manipulateSet").reset();
    clearSet();
}

// Push an item to the Set when button is clicked
document.getElementById("pushSetButton").addEventListener("click", pushItem);

function pushItem() {
    var item = document.getElementById("pushSet").value;
    const success = newSet.add(item);
    displayForm(null, success);
    if (success === true) {
        document.getElementById("pSetInsert").innerText = `${item} was inserted.`;
    } else {
        document.getElementById("pSetInsert").innerText = `${item} was already in Set.`;
    }

}

// Pop an item from the Set when button is clicked
document.getElementById("popSetButton").addEventListener("click", popItem);

function popItem() {
    const item = document.getElementById("popSet").value;
    const success = newSet.remove(item);
    displayForm(item, success);
}

// Dynamically display the form with the current state of the stack
const displayForm = (popped=null, success=false) => {
    var height = newSet.getSize();
    if (height === 0) {
        document.getElementById("heightSet").value = height;
        document.getElementById("popSet").value = "Empty Set";
    } else {
        document.getElementById("heightSet").value = height;
        // document.getElementById("top").value = newSet.peek();
        if (popped !== null) {
            if (success === true) {
                document.getElementById(
                  "popSet"
                ).value = `${popped} was removed`;
            } else {
                document.getElementById(
                  "popSet"
                ).value = `${popped} was not in Set.`;
            }

        } else {
            document.getElementById("popSet").value = "";
            document.getElementById("popSet").placeholder = "Pop Item from Set";
        }
    }
    document.getElementById("pushSet").value = "";
    document.getElementById("pushSet").placeholder = "Push Item to Set";
     document.getElementById("pSetInsert").innerText= "";
}

// Display all items in the Set when button is clicked
document.getElementById("allSetButton").addEventListener("click", displayAll);

function displayAll() {
    var allItems = newSet.setAsText();
    // alert(`${allItems}`);

    document.getElementById("pSetVisualOutput").textContent = allItems;
    document.getElementById("clearSetButton").disabled = false;
}

// Clear the visualization when button is clicked
document.getElementById("clearSetButton").addEventListener("click", clearSet);

function clearSet() {
    document.getElementById("pSetVisualOutput").textContent = "";
    document.getElementById("clearSetButton").disabled = true;
}
