// Stack/stackTest.js
// Does unit test on the Stack data structure in stack.js
// with the help of stackTest.html for visualization

// Import
// import { Stack } from "./stack.js";

// Global Variables
let newStack = new Stack();
const txt = document.getElementById("introFormStack").textContent;

// window.onload = creation();

// Create a new Stack when button is pushed
let createButton = document.getElementById("createStack");
createButton.addEventListener("click", () => {
    creation();
});

var count = 0;

function creation() {


    if (count == 0) {
        document.getElementById("remove").style.display = "none";
    }
    count++;


    newTxt = "An empty Stack has been initialized. Now " + txt;
    document.getElementById("pIntroFormStack").innerText = newTxt;
    document.getElementById("destroyStack").disabled = false;
    document.getElementById("pushStackButton").disabled = false;
    document.getElementById("popStackButton").disabled = false;
    document.getElementById("allStackButton").disabled = false;
    document.getElementById("createStack").disabled = true;

    displayForm();
}

// Destroy the Stack when button is clicked
document.getElementById("destroyStack").addEventListener("click", destruction)

function destruction(){
    newStack.destroy();
    newTxt = "Stack has been destroyed. Create a new Stack. Then " + txt;
    document.getElementById("pIntroFormStack").innerText = newTxt;
    document.getElementById("createStack").disabled = false;
    document.getElementById("destroyStack").disabled = true;
    document.getElementById("pushStackButton").disabled = true;
    document.getElementById("popStackButton").disabled = true;
    document.getElementById("allStackButton").disabled = true;

    // Reset the form;
    document.getElementById("manipulateStack").reset();
    clearStack();
}

// Push an item to the Stack when button is clicked
document.getElementById("pushStackButton").addEventListener("click", pushItem);

function pushItem() {
    var item = document.getElementById("pushStack").value;
    newStack.push(item);
    displayForm();
}

// Pop an item from the Stack when button is clicked
document.getElementById("popStackButton").addEventListener("click", popItem);

function popItem() {
    const item = newStack.pop();
    displayForm(item);
}

// Dynamically display the form with the current state of the stack
const displayForm = (popped=null) => {
    var height = newStack.height();
    if (height === 0) {
        document.getElementById("heightStack").value = height;
        document.getElementById("top").value = "Empty Stack";
        document.getElementById("popStack").value = "Empty Stack";
    } else {
        document.getElementById("heightStack").value = height;
        document.getElementById("top").value = newStack.peek();
        if (popped !== null) {
            document.getElementById("popStack").value = popped;
        } else {
            document.getElementById("popStack").value = "";
            document.getElementById("popStack").placeholder = "Pop Item from Stack";
        }
    }
    document.getElementById("pushStack").value = "";
    document.getElementById("pushStack").placeholder = "Push Item to Stack";
}

// Display all items in the Stack when button is clicked
document.getElementById("allStackButton").addEventListener("click", displayAll);

function displayAll() {
    var allItems = "";
    for (var i = 1; i < newStack.height(); i++) {
        allItems += newStack.peek(i) + " -> ";
    }
    allItems += newStack.peek(i);

    document.getElementById("pStackVisualOutput").textContent = allItems;
    document.getElementById("clearStackButton").disabled = false;
}

// Clear the visualization when button is clicked
document.getElementById("clearStackButton").addEventListener("click", clearStack);

function clearStack() {
    document.getElementById("pStackVisualOutput").textContent = "";
    document.getElementById("clearStackButton").disabled = true;
}
