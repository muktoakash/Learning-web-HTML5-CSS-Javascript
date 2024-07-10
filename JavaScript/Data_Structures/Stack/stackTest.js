// stackTest.js
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
    // document.getElementById("manipulateStack").reset();
    // document.getElementById("createStack").addEventListener("click", creation)
}

// Dynamically display the form with the current state of the stack
const displayForm = () => {
    var height = newStack.height();
    if (height === 0) {
        document.getElementById("heightStack").value = height;
        document.getElementById("top").value = "Empty Stack";
        document.getElementById("popStack").value = "Empty Stack";
    } else {
        document.getElementById("heightStack").value = height;
        document.getElementById("top").value = newStack.peek();
        document.getElementById("popStack").value = "Pop Item from Stack";
    }
    document.getElementById("pushStack").defaultValue = "Push Item to Stack";
}