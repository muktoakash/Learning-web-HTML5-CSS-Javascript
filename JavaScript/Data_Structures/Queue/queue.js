// ./queue.js
// Queue and Priority Queue data structure

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
    var collection = [];
    var size = 0;

    printPQ = () => {

    }

    enque = (element) => {
        if (this.empty()) {
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
