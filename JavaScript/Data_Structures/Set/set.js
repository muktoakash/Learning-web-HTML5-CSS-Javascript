class SetObject{ // Named to avoid conflict with ES6 Set
    constructor() {
        // Use an array to hold the elements (not efficient for lookup)
        // May be modify later with a hashtable
        this.collection = [];
        this.size = 0;
    }

    hasElement(element) {
        return (this.collection.indexOf(element) !== -1);
    }

    getAll() {
        return this.collection;
    }

    add(item) {
        if (!this.hasElement(item)) {
            this.collection.push(item);
            this.size++;
            return true;
        }
        return false;
    }

    remove(item) {
        if (this.hasElement(item)) {
            let index = this.collection.indexOf(item);
            this.collection.splice(index, 1);
            this.size--;
            return true;
        }
        return false;
    }

    getSize() { return this.size; }


}
