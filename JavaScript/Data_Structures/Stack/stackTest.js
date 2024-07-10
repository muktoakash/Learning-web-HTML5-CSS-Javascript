// stackTest.js
// Does unit test on the Stack data structure in stack.js
// with the help of stackTest.html for visualization

// Import
import { Stack } from "./stack.js";

// Create a new Stack when button is push
let newStack = new Stack();

document.getElementById("createStack").addEventListener("click", () => {
    txt = document.getElementById("pIntroFormStack").textContent;
    txt = "Stack has been initialized. " + txt;
    document.getElementById("pIntroFormStack").innerText = txt;
    
    displayForm();
})

// Dynamically display the form with the current state of the stack
const displayForm = () => {
    var height = 0;
    if (height === 0) {
        document.getElementById("heightStack").value = height;
        document.getElementById("top").value = "Empty Stack";
        document.getElementById("popStack").value = "Empty Stack";
    } else {
        document.getElementById("heightStack").value = height;
        // document.getElementById("top").value = newStack.peek();
        document.getElementById("popStack").value = "Pop Item from Stack";
    }
    document.getElementById("pushStack").defaultValue = "Push Item to Stack";
}