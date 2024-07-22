class SetofStrings {
  // Named to avoid conflict with ES6 Set
  constructor() {
    this.collection = {};
    this.size = 0;
  }

  hasElement(element) {
    if (this.collection[String(element)] !== undefined) {
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
    } else {
      elements = this.getAll();
      retText = "{";
      counter = 0;
      for (const item of elements) {
        retText += item;
        counter++;
        if (counter < this.size) {
          retText += ", ";
        } else {
          retText += "}";
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

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // Implement set union, intersection, difference, Cartesian Product, Power Set, isSubset, isSuperset

  static union(setA, setB) {
    var unionSet = new SetofStrings();
    for (item of setA.getAll()) {
      unionSet.add(item);
    }
    for (item of setB.getAll()) {
      unionSet.add(item);
    }

    return unionSet;
  }

  static intersection(setA, setB) {
    var intersectionSet = new SetofStrings();
    for (item of setA.getAll()) {
      if (setB.hasElement(item)) {
        intersectionSet.add(item);
      }
    }

    return intersectionSet;
  }
  static AdiffB(setA, setB) {
    var diffSet = new SetofStrings();
    for (item of setA.getAll()) {
      if (!setB.hasElement(item)) {
        diffSet.add(item);
      }
    }

    return diffSet;
  }

  static cartesianProduct(setA, setB) {
    var newItem;
    var newSet;
    for (itemA of setA.getAll()){
      for (itemB of setB.getAll()){
        newItem = `(${itemA}, ${itemB})`;
        newSet.add(newItem);
      }
    }
    return newSet;
  }

  // helper functions
}
