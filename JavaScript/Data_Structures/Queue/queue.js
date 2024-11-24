// ./queue.js
// Queue and Priority Queue data structure
// Using JSON for Priority Queue to make it more interesting

class Queue{

    constructor() {
        this.collection = [];
        this.size = 0;
    }

    destroy = () => {
        // Resets the queue, not the same as freeing the memory.
        this.constructor();
    }

    enqueue = (element) => {
        // pushes an element to the back of the queue
        this.collection.push(element);
        this.size++;
    }

    dequeue = (element) => {
        // Pops element from the front of the queue
        this.size--;
        return this.collection.shift();
    }

    front = () => {
        // Displays element at the front of the queue
        return this.collection[0];
    }

    getSize = () => {
        return this.size;
    }

    isEmpty = () => {
        return (this.getSize() === 0);
    }

    printQueue = () => {
        // Prints the queue in a pretty format
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

    constructor(){
        var collection = {}; // Using a JS object for the PQ
        var size = 0;
        var sorted_priorities = [];
    }

    function prioritiesAddAndSort(item_key) {
        /* Use insertion sort to sort the keys
        Require: item_key >= 0 (not asserted)*/
        const index = this.sorted_priorities.indexOf(item_key);
        if (index === -1 && this.sorted_priorities.length > 0) {
            var i = this.sorted_priorities.length - 1;
            while (item_key > sorted_priorities[i] && i > 0) {
                i -= 1;
            }
            this.sorted_priorities.splice(i + 1, 0, item_key);
        }
    }

    isPQEmpty = () => {
        return this.size === 0;
    }

    isItemPresent = (element) => {
        const item_key = element[1];
        const item_value = element[0];
        if (this.collection[item_key] === undefined;
            || this.collection[item_key].indexOf(item_value) === -1) {
            return false;
        }
        return true;
    }

    printPQ = () => {
        if (this.isPQEmpty()) {
            return "The Queue is empty."
        }
        var ret_text = "";
        ret_text = ret_text + "Priorities    |    Items\n";
        ret_text = ret_text + "------------------------\n";
        var count = 0;
        for (var priority of this.sorted_priorities) {
            ret_text += `${priority}    |    `;
            for (var item_value of this.collection[priority]) {
                ret_text += `${item_value},`;
            }
            count += 1;
            if (count !== this.sorted_priorities.length) {
                ret_text += "\n";
            }
        }
        return ret_text;
    }

    enque = (element) => {
        const item_key = element[1];
        const item_value = element[0];
        if (this.collection[item_key] === undefined) {
            this.collection[item_key] = [item_value];
            this.prioritiesAddAndSort(item_key);
            this.size += 1;
        } else if (this.collection[item_key].indexOf(item_value) === -1) {
            this.collection[item_key].push(item_value);
            this.prioritiesAddAndSort(item_key);
            this.size += 1;
        }
    }

    dequeue = () => {
        if (!this.isPQEmpty()) {
            const item_key = this.sorted_priorities[0];
            // if more than one item at that priority, return the latest.
            const item_value = this.collection[item_key].pop();
            if (this.collection[item_key].length === 0) {
                // No more items left at this priority
                this.sorted_priorities.shift();
            }
            return item_value;
        }
        // trying to dequeue from an empty PQ results in undefined.
        return undefined;
    }
}
