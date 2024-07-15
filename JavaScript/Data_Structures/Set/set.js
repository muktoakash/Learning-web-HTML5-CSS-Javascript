class SetofStrings{ // Named to avoid conflict with ES6 Set
    constructor() {
        this.collection = {};
        this.size = 0;
    }

    hasElement(element) {
        if (this.collection[String(element)]) {
            return true;
        }
        return false;
    }

    getAll() {
        return Object.keys(this.collection);
    }

    setAsText() {
        if (this.isEmpty()) {
            retText = "{ }";
        }
        else {
            elements = this.getAll();
            retText = "{";
            counter = 0;
            for (const item of elements) {
                retText += item;
                counter++;
                if (counter < this.size) {
                    retText += ", "
                }
                else {
                    retText += "}"
                }
            }
        }
        return retText;
    }


    add(item) {
        if (!this.hasElement(item)) {
            this.collection[String(item)] = true;
            this.size++;
            return true;
        }
        return false;
    }

    remove(item) {
        if (this.hasElement(item)) {
            this.collection[String(item)] = false;
            this.size--;
            return true;
        }
        return false;
    }

    getSize() { return this.size; }

    isEmpty() { return this.size === 0; }

    // Implement set union, intersection, difference, Cartesian Project, Power Set, isSubset


}
