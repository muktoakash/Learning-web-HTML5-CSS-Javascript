// queueTest.js
// Does unit test on the Queue data structure in queue.js
// with the help of queueTest.html for visualization

// Import
// import { Queue } from "./queue.js";

// Global Variables
let newQueue = new Queue();
const txt = document.getElementById("introFormQueue").textContent;

// window.onload = creation();

// Create a new Queue when button is pushed
let createButton = document.getElementById("createQueue");
createButton.addEventListener("click", () => {
  creation();
});

var count = 0;

function creation() {
  if (count == 0) {
    document.getElementById("remove").style.display = "none";
  }
  count++;

  newTxt = "An empty Queue has been initialized. Now " + txt;
  document.getElementById("pIntroFormQueue").innerText = newTxt;
  document.getElementById("destroyQueue").disabled = false;
  document.getElementById("pushQueueButton").disabled = false;
  document.getElementById("popQueueButton").disabled = false;
  document.getElementById("allQueueButton").disabled = false;
  document.getElementById("createQueue").disabled = true;

  displayForm();
}

// Destroy the Queue when button is clicked
document.getElementById("destroyQueue").addEventListener("click", destruction);

function destruction() {
  newQueue.destroy();
  newTxt = "Queue has been destroyed. Create a new Queue. Then " + txt;
  document.getElementById("pIntroFormQueue").innerText = newTxt;
  document.getElementById("createQueue").disabled = false;
  document.getElementById("destroyQueue").disabled = true;
  document.getElementById("pushQueueButton").disabled = true;
  document.getElementById("popQueueButton").disabled = true;
  document.getElementById("allQueueButton").disabled = true;

  // Reset the form;
  document.getElementById("manipulateQueue").reset();
  clearQueue();
}

// Push an item to the Queue when button is clicked
document.getElementById("pushQueueButton").addEventListener("click", pushItem);

function pushItem() {
  var item = document.getElementById("pushQueue").value;
  newQueue.enqueue(item);
  displayForm();
}

// Pop an item from the Queue when button is clicked
document.getElementById("popQueueButton").addEventListener("click", popItem);

function popItem() {
  const item = newQueue.dequeue();
  displayForm(item);
}

// Dynamically display the form with the current state of the queue
const displayForm = (popped = null) => {
  var height = newQueue.getSize();
  if (height === 0) {
    document.getElementById("heightQueue").value = height;
    document.getElementById("top").value = "Empty Queue";
    document.getElementById("popQueue").value = "Empty Queue";
  } else {
    document.getElementById("heightQueue").value = height;
    document.getElementById("top").value = newQueue.front();
    if (popped !== null) {
      document.getElementById("popQueue").value = popped;
    } else {
      document.getElementById("popQueue").value = "";
      document.getElementById("popQueue").placeholder = "Pop Item from Queue";
    }
  }
  document.getElementById("pushQueue").value = "";
  document.getElementById("pushQueue").placeholder = "Push Item to Queue";
};

// Display all items in the Queue when button is clicked
document.getElementById("allQueueButton").addEventListener("click", displayAll);

function displayAll() {
  var allItems = "";
  allItems += newQueue.printQueue();

  document.getElementById("pQueueVisualOutput").textContent = allItems;
  document.getElementById("clearQueueButton").disabled = false;
}

// Clear the visualization when button is clicked
document
  .getElementById("clearQueueButton")
  .addEventListener("click", clearQueue);

function clearQueue() {
  document.getElementById("pQueueVisualOutput").textContent = "";
  document.getElementById("clearQueueButton").disabled = true;
}
