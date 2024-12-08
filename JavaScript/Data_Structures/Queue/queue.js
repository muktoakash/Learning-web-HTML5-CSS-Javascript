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
        this.collection = [];
        this.size = 0;
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
            count++;
        }
        return retString;
    }
}

class PriorityQueue{
    /* Priority Queue PQ implemented using JavaScript Object.
    The keys are the priorities, the values are queues of the items
    for a given priority.
    Unlike an approach that may use a list of tuples, where
    the adding needs to be queued by prioriy, here the priority
    is maintained separately be sorting a list of keys. This may
    not make much of a performance difference (except for enqueue),
    but this is my approach cause I found it more interesting. */

    constructor(){
        this.collection = {}; // Using a JS object for the PQ
        this.size = 0;
        this.sorted_priorities = [];
    }

    destroy() {
        this.collection = {};
        this.size = 0;
        this.sorted_priorities = [];
    }

    getSize() {
        return this.size;
    }

    prioritiesAddAndSort = (item_key)  => {
        /* Use insertion sort to sort the keys
        Require: item_key >= 0 (not asserted)*/
        let index = this.sorted_priorities.indexOf(item_key);
        if (this.sorted_priorities.length === 0) {
            this.sorted_priorities.push(item_key);
            index = 0;
            return index;
        }
        if (index === -1 && this.sorted_priorities.length > 0) {
            var i = this.sorted_priorities.length - 1;
            while (item_key > this.sorted_priorities[i] && i > 0) {
                i -= 1;
            }
            this.sorted_priorities.splice(i + 1, 0, item_key);
        }
        return index;
    }

    isPQEmpty = () => {
        return this.getSize() === 0;
    }

    printPQ = () => {
        if (this.isPQEmpty()) {
            return "The Queue is empty."
        }
        var ret_text = "";
        ret_text = ret_text + "Priorities    |    Items<br>";
        ret_text = ret_text + "------------------------<br>";
        var count = 0;
        for (var priority of this.sorted_priorities.toReversed()) {
            ret_text +=
              `${priority}` + " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |";
            ret_text += this.collection[priority].printQueue();
            count += 1;
            if (count !== this.sorted_priorities.length) {
                ret_text += "<br>";
            }
        }
        return ret_text;
    }

    enqueue = (element) => {
        const item_key = element[1];
        const item_value = element[0];
        let idx = 1;
        if (this.collection[item_key] === undefined) {
            this.collection[item_key] = new Queue();
            this.collection[item_key].enqueue(item_value);
            idx = this.prioritiesAddAndSort(item_key);
            this.size += 1;
        } else {
            this.collection[item_key].enqueue(item_value);
            idx = this.prioritiesAddAndSort(item_key);
            this.size += 1;
            return idx;
        }
    }

    dequeue = () => {
        if (!this.isPQEmpty()) {
            const item_key = this.sorted_priorities[this.sorted_priorities.length - 1];
            // if more than one item at that priority, return the latest.
            const item_value = this.collection[item_key].dequeue();
            if (this.collection[item_key].getSize() === 0) {
                // No more items left at this priority
                this.sorted_priorities.shift();
            }
            this.size--;
            return item_value;
        }
        // trying to dequeue from an empty PQ results in undefined.
        return undefined;
    }
}
