class Stack {
    constructor() {
        let this.size = 0;
        let this.storage = {};
    }

    push(value) {
        this.storage[this.size] = value;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return undefined;
        }

        this.size--;
        var item = this.storage[this.size];
        delete this.storage[this.size];
        return item;
    }

    length() {
        return this.size;
    }

    peek(value = this.size) {
        return this.storage[value - 1];
    }
}
