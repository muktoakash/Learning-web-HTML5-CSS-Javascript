// ./queue.js
// Queue and Priority Queue data structure

class Queue{

    constructor() {
        var this.collection = [];
        var this.size = 0;
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

    print = () => {
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
