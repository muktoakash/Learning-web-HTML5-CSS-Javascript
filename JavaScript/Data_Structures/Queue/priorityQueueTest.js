// queueTest.js
// Does unit test on the PriorityQueue data structure in queue.js
// with the help of queueTest.html for visualization

// Import
// import { PriortyQueue } from "./queue.js";

// Global Variables
let newPQ = new PriorityQueue();
const PQtxt = document.getElementById("introFormPQ").textContent;

// window.onload = creation();

// Create a new PQ when button is pushed
let createPQButton = document.getElementById("createPQ");
createPQButton.addEventListener("click", () => {
  PQcreation();
});

var count = 0;

function PQcreation() {
  if (count == 0) {
    document.getElementById("PQremove").style.display = "none";
  }
  count++;

  var newPQTxt = "An empty PQ has been initialized. Now " + PQtxt;
  document.getElementById("pIntroFormPQ").innerText = newPQTxt;
  document.getElementById("destroyPQ").disabled = false;
  document.getElementById("pushPQButton").disabled = false;
  document.getElementById("popPQButton").disabled = false;
  document.getElementById("allPQButton").disabled = false;
  document.getElementById("createPQ").disabled = true;

  displayPQForm();
}

// Destroy the PQ when button is clicked
document.getElementById("destroyPQ").addEventListener("click", PQdestruction);

function PQdestruction() {
  newPQ.destroy();
  newPQTxt = "PQ has been destroyed. Create a new PQ. Then " + PQtxt;
  document.getElementById("pIntroFormPQ").innerText = newPQTxt;
  document.getElementById("createPQ").disabled = false;
  document.getElementById("destroyPQ").disabled = true;
  document.getElementById("pushPQButton").disabled = true;
  document.getElementById("popPQButton").disabled = true;
  document.getElementById("allPQButton").disabled = true;

  // Reset the form;
  document.getElementById("manipulatePQ").reset();
  clearPQ();
}

// Push an item to the PQ when button is clicked
document.getElementById("pushPQButton").addEventListener("click", pushItem);

function pushPQItem() {
  var item = document.getElementById("pushPQ").value;
  newPQ.enqueue(item);
  displayForm();
}

// Pop an item from the PQ when button is clicked
document.getElementById("popPQButton").addEventListener("click", popItem);

function popPQItem() {
  const item = newPQ.dequeue();
  displayForm(item);
}

// Dynamically display the form with the current state of the queue
const displayPQForm = (popped = null) => {
  var height = newPQ.getSize();
  if (height === 0) {
    document.getElementById("heightPQ").value = height;
    document.getElementById("topPQ").value = "Empty PQ";
    document.getElementById("topPriority").value = "Empty PQ";
    document.getElementById("popPQ").value = "Empty PQ";
  } else {
    document.getElementById("heightPQ").value = height;
    document.getElementById("topPQ").value = newPQ.front();
    if (popped !== null) {
      document.getElementById("popPQ").value = popped;
    } else {
      document.getElementById("popPQ").value = "";
      document.getElementById("popPQ").placeholder = "Pop Item from PQ";
    }
  }
  document.getElementById("pushPQ").value = "";
  document.getElementById("pushPQ").placeholder = "Push Item to PQ";
  document.getElementById("pushPriority").placeholder = "Default: 1";

};

// Display all items in the PQ when button is clicked
document.getElementById("allPQButton").addEventListener("click", displayAll);

function displayPQAll() {
  var allItems = "";
  allItems += newPQ.printPQ();

  document.getElementById("pPQVisualOutput").textContent = allItems;
  document.getElementById("clearPQButton").disabled = false;
}

// Clear the visualization when button is clicked
document
  .getElementById("clearPQButton")
  .addEventListener("click", clearPQ);

function clearPQ() {
  document.getElementById("pPQVisualOutput").textContent = "";
  document.getElementById("clearPQButton").disabled = true;
}
