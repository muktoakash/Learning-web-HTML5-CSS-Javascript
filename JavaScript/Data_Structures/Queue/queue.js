// ./queue.js
// Queue and Priority Queue data structure
// Using JSON for Priority Queue to make it more interesting

class Queue{

    constructor() {
        this.collection = [];
        this.size = 0;
    }

    enqueue = (element) => {
        this.collection.push(element);
        this.size++;
    }

    dequeue = (element) => {
        this.size--;
        return this.collection.shift();
    }

    front = () => {
        return this.collection[0];
    }

    getSize = () => {
        return this.size;
    }

    isEmpty = () => {
        return (this.getSize() === 0);
    }

    printQueue = () => {
        var retString = "FRONT : "
        var count = 0;
        for (var elem of this.collection) {
            retString += `${elem}`;
            if (count < this.getSize() - 1) {
                retString += " -> ";
            } else {
                retString += " : END";
            }
        }
        return retString;
    }
}

class PriorityQueue(){
    /* Priority Queue PQ implemented using JavaScript Object.
    The keys are the priorities, the values are the items.
    Unlike an approach that may use a list of tuples, where
    the adding needs to be queued by prioriy, here the priority
    is maintained separately be sorting a list of keys. This may
    not make much of a performance difference (except for enqueue),
    but this is my appraoch cause I found it more interesting. */

    var collection = {}; // Using a JS object for the PQ
    var size = 0;
    var sorted_priorities = [];

    isPQEmpty = () => {
        return this.size === 0;
    }

    printPQ = () => {
        if (this.isPQEmpty()) {
            return "The Queue is empty."
        }

    }

    enque = (element) => {
        const item_key = element[1];
        const item_value = element[0]
        if (this.isPQempty()) {
            this.collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < this.collection.length; i++) {
                if (element[1] < collection[i][1]) { // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
        this.size += 1;

    }

    dequeue = () => {

    }
}
