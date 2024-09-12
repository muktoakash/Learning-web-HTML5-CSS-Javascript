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

      var listSet = new Array(); // list of all sets in the Power Set

      // Create all possible subsets using helper function
      const n = this.getSize();
      var listSet = this.nGenSet();

      // Build the powerset
      // console.log(listSet);
      const k = listSet.length;
      let toAdd = true;

      for (let i = 0; i < k; i++) {
        const curr_size = listSet[i].getSize();
        for (let j = 0; j < i; j++) {
          toAdd = (toAdd) && ((!listSet[j].getSize() === curr_size) ||(!SetOfStrings.setEqual(listSet[j], listSet[i])));
          if (toAdd === false) {
            break;
          }
        }
        if (toAdd === false) {
          toAdd = true;
          continue;
        } else {
          powSet.add(listSet[i].setAsText());
        }
      }
    return powSet
  }

  static union(setA, setB) {
    var unionSet = new SetOfStrings();
    if (setA.getSize() === 0) {
      return setB;
    }
    if (setB.getSize() === 0) {
      return setA;
    }

    for (var item of setA.getAll()) {
      unionSet.add(item);
    }
    for (var item of setB.getAll()) {
      unionSet.add(item);
    }

    return unionSet;
  }

  static intersection(setA, setB) {
    var intersectionSet = new SetOfStrings();
    if (!(setA.getSize() === 0 || setB.getSize() === 0)) {
      for (var item of setA.getAll()) {
        if (setB.hasElement(item)) {
          intersectionSet.add(item);
        }
      }
    }

    return intersectionSet;
  }

  static AdiffB(setA, setB) {
    var diffSet = new SetOfStrings();
    for (const item of setA.getAll()) {
      if (! setB.hasElement(item)) {
        diffSet.add(item);
      }
    }

    return diffSet;
  }

  static cartesianProduct(setA, setB) {
    var newItem ;
    var newSet = new SetOfStrings();
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

  nGenSet() {
    // Generate all size-subsets of this

    const n = this.getSize();

    const listElements = this.getAll();

    let listSets = new Array();

    for (var setSize = 0; setSize <= n; setSize++) {
      if (setSize === 0) {
        const empSet = new SetOfStrings();
        listSets[0] = empSet;
      }
      else if (setSize === 1) {
        for (let i = 1; i <= n; i++) {
          listSets[i] = new SetOfStrings();
          listSets[i].add(listElements[i-1]);
        }
      }
      else if ((setSize > 1) && (setSize < n)) {
        const num_sets_yet = listSets.length;
        var counter = num_sets_yet - 1;

        var newSet = new SetOfStrings();


          for (let i = 1; i <= n; i++) {
            while (listSets[counter].getSize() === setSize - 1) {
              newSet = SetOfStrings.union(listSets[i], listSets[counter]);
              if (newSet.getSize() === setSize) {
                listSets.push(newSet);
              }
              counter--;
            }
            counter = num_sets_yet - 1;
          }
      }
      else {
          const k = listSets.length;
          listSets[k] = this;
      }
    }
    return listSets;
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
