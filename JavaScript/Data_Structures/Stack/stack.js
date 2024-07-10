class Stack {
    constructor() {
        this.size = 0;
        this.storage = {};
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

    height() {
        return this.size;
    }

    peek(value = this.size) {
        return this.storage[value - 1];
    }

    destroy() {
        this.size = 0;
        delete this.storage;
        this.storage = {};
    }
}
