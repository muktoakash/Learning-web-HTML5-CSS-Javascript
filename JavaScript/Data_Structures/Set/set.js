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

  powerSet() {
    // Return must be a set
    // Must contain empty set and this
    // Must contain every subset of this
    // All contents are string representations of sets

    powSet = new SetofStrings(); // Set to return

    empSet = new SetofStrings(); // empty set

    powSet.add(empSet.setAsText());

    const listElements = this.getAll() // list of elements

    // Create all possible subsets using helper function
    const n = this.getSize();
    for (element of listElements){

        for(var i = 1; i<n; i++) {
          nItemSet = nGenSet(i, element);
          powSet.add(nItemSet);
        }
    }

    powSet.add(this.setAsText());

    return powSet
  }

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
    var newItem ;
    var newSet = new SetofStrings();
    for (itemA of setA.getAll()){
      for (itemB of setB.getAll()){
        newItem = `(${itemA}, ${itemB})`;
        newSet.add(newItem);
      }
    }
    return newSet;
  }

  // helper functions
  isSubset(that){
    if (this.getSize() > that.getSize()){
      return false;
    }

    for (itemA of this.getAll()) {
      if (! that.hasElement(itemA) ) { return false; }
    }
    return true;
  }

  isSuperSet(that) {
    return (that.isSubset(this));
  }

  static setEqual(setA, setB) {
    return (setA.isSubset(setB) && setB.isSubset(setA));
  }

  nGenSet(size, item) {
    // Generate all size-subsets of this that contains
    // given element

    const n = this.getSize();

    // Input validation
    if (size >= n) {
      alert("size out of bounds;")
        return "none";
    }


    var retSet = new Set();

    listElements = this.getAll();

    for (var j = 0; j < )
    for (element of listElements) {
      if (element == item) {
        continue;
      }

    }
  }

  setAll(listElements) {
    // must start with an empty set
    // mutates this

    if (!this.isEmpty()) {
      alert("Set not empty, must use empty set");
    }

    this.enterList(listElements);
  }

  enterList(listElements) {
    for (element of listElements) {
      this.add(element);
    }
  }
}
