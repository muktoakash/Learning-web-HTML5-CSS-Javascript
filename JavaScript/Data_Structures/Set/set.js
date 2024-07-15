class SetofStrings{ // Named to avoid conflict with ES6 Set
    constructor() {
        // Use an array to hold the elements (not efficient for lookup)
        // May be modify later with a hashtable
        this.collection = {};
        this.size = 0;
    }

    hasElement(element) {
       // return (this.collection.indexOf(element) !== -1);
        if (this.collection[String(element)]) {
            return true;
        }
        return false;
    }

    getAll() {
        // return this.collection;
        return Object.keys(this.collection);
    }

    add(item) {
        if (!this.hasElement(item)) {
            // this.collection.push(item);
            this.collection[String(item)] = true;
            this.size++;
            return true;
        }
        return false;
    }

    remove(item) {
        if (this.hasElement(item)) {
            // let index = this.collection.indexOf(item);
            // this.collection.splice(index, 1);
            this.collection[String(item)] = false;
            this.size--;
            return true;
        }
        return false;
    }

    getSize() { return this.size; }

    isEmpty() { return this.size === 0; }


}
