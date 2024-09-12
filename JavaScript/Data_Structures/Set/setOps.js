// setOps.js
// Tests the implementation of set operations from set.js

const setA = new SetOfStrings();
const setB = new SetOfStrings();

var AcupB = new SetOfStrings();
var AcapB = new SetOfStrings();
var AdiffB = new SetOfStrings();
var BdiffA = new SetOfStrings();
var AcrossB = new SetOfStrings();

document.querySelector("#createSetOps").addEventListener("click", () => {
    setA.destroy();
    setB.destroy();

    let setAInput = document.querySelector("#insertSetA").value;
    let setAList = setAInput.split(",");
    setAList = setAList.map(x => x.trim());
    setA.enterList(setAList);

    document.querySelector("#setADisp").textContent = "A = " + setA.setAsText();

    let setBInput = document.querySelector("#insertSetB").value;
    let setBList = setBInput.split(",");
    setBList = setBList.map(x => x.trim());
    setB.enterList(setBList);

    document.querySelector("#setBDisp").textContent = "B = " + setB.setAsText();

    displayResults();


}
)

displayResults = () => {
    AcupB = SetOfStrings.union(setA, setB);
    AcapB = SetOfStrings.intersection(setA, setB);
    AdiffB = SetOfStrings.AdiffB(setA, setB);
    BdiffA = SetOfStrings.AdiffB(setB, setA);
    AcrossB = SetOfStrings.cartesianProduct(setA, setB);

    document.querySelector("#setOpsUnion").innerHTML = displaySet(AcupB);

}

displaySet = (resultSet) => {
    if (resultSet.getSize() === 0) {
        return "&empty;";
    } else {
        return resultSet.setAsText();
    }
}
