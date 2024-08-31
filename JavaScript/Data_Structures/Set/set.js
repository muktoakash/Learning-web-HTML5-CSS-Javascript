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
    var listSet = new Array(); // list of all sets in the Power Set

    // Create all possible subsets using helper function
    const n = this.getSize();
    if (n >= 1) {
      listSet = this.nGenSet(n);
    }

    listSet.push(empSet);
    listSet.push(this);

    // Build the powerset
    const k = listSet.length;
    let toAdd = true;

    for (let i = 0; i < k; i++) {
      curr_size = listSet[i].getSize();
      for (let j = 0; j < i; j++) {
        toAdd = (toAdd) && !(listSet[j].getSize() === curr_size) && (!SetOfStrings.setEqual(listSet[j], listSet[i]));
        if (toAdd === false) {
          break;
        }
      }
      if (toAdd === false) {
        continue;
      } else {
        powSet.add(listSet[i].setAsText);
      }
    }

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

  nGenSet(size) {
    // Generate all size-subsets of this
    // containing given element
    // Sometimes the return would be size-1 subset,
    // which ruins a small amount of efficiency,
    // but something that will be ignored at this point.
    //  May be fixed on a later date

    // side-effect: modifies currList

    const n = this.getSize();

    // Input validation
    if (size >= n) {
      alert("size out of bounds;");
      return "none";
    }

    const listElements = this.getAll();

    let listSets = new Array();

    // Rewrite: requires n >= 1
    if (size === 1) {
      for (let i = 0; i < n; i++) {
        listSets[i] = new SetOfStrings();
        listSets[i].add(listElements[i]);
      }
    } else {
      const num_sets_yet = listSets.length;
      const newList = new Array();
      newList = this.nGenSet(size - 1);
      const num_new_sets = newList.length;
      for (let i = 0; i < num_sets_yet; i++) {
        for (let j = 0; j < num_new_sets; j++) {
          listSets[i + j + num_sets_yet] = SetOfStrings.union(
            listSets[i],
            newList[j]
          );
        }
      }
      return listSets;
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
    for (var element of listElements) {
      this.add(element);
    }
  }
}
