class SetOfStrings {
  // Named to avoid conflict with ES6 Set
  constructor() {
    this.collection = {};
    this.size = 0;
  }

  destroy() {
    delete this.collection;
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
    var retText;
    if (this.isEmpty()) {
      retText = "{ }";
    } else {
      const elements = this.getAll();
      retText = "{";
      var counter = 0;
      for (const item of elements) {
        if (this.hasElement(item) == false) {
          continue;
        }
        retText += item;
        counter++;
        if (counter < this.getSize()) {
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
      this.collection[String(item)] = undefined;
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


  powerSet() {
    // Return must be a set
    // Must contain empty set and this
    // Must contain every subset of this
    // All contents are string representations of sets

    var powSet = new SetOfStrings(); // Set to return

    var empSet = new SetOfStrings(); // empty set

    powSet.add(empSet.setAsText());

    const listElements = this.getAll() // list of elements

    // Create all possible subsets using helper function
    const n = this.getSize();
    if (n >= 1) {
      for (const element of listElements) {
        for (var i = 0; i < n - 1; i++) {
          var currentItemSet = this.nGenSet(i, element); //subsets of size i with element
          powSet.enterList(currentItemSet.getAll()); // Add all these subsets
        }
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
    for (const item of setA.getAll()) {
      if (! setB.hasElement(item)) {
        diffSet.add(item);
      }
    }

    return diffSet;
  }

  static cartesianProduct(setA, setB) {
    var newItem ;
    var newSet = new SetofStrings();
    for (const itemA of setA.getAll()){
      for (const itemB of setB.getAll()){
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

    for (const itemA of this.getAll()) {
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
    // Generate all size-subsets of this
    // containing given element
    // Sometimes the return would be size-1 subset,
    // which ruins a small amount of efficiency,
    // but something that will be ignored at this point.
    //  May be fixed on a later date

    const n = this.getSize();

    // Input validation
    if (size >= n) {
      alert("size out of bounds;")
        return "none";
    }


    var retSet = new SetOfStrings();

    const listElements = this.getAll();

    for (var j = 0; j < n - size; j++) {
      var setToAdd = new SetOfStrings();
      setToAdd.add(item); // Put current item in

      var elemsToAdd = listElements.slice(j, j + size);

      setToAdd.enterList(elemsToAdd);

      retSet.add(setToAdd.setAsText());
    }

    return retSet;
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
    for (var element of listElements) {
      this.add(element);
    }
  }
}
