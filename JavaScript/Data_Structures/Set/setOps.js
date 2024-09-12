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

    document.querySelector("#setOpsUnion").innerHTML = "A" + "&cup;" + "B is " + displaySet(AcupB);
    document.querySelector("#setOpsIntersection").innerHTML = "A" + "&cap;" + "B is " + displaySet(AcapB);
    document.querySelector("#setOpsDiff").innerHTML =
      "<div>A" + "&#8726;" + "B is " + displaySet(AdiffB) + "</div>" +
        "<div>B" + "&#8726;" + "A is " + displaySet(BdiffA) + "</div>" +
        "<div>A" + "&#9651;" + "B is " + displaySet(SetOfStrings.union(AdiffB,BdiffA)) + "</div>"
      ;
    document.querySelector("#setOpsCart").innerHTML =
        "<div>" + "A" + "&times;" + "B is " + displaySet(AcrossB) + "</div>" +
        "<div>" + "B" + "&times;" + "A is " + displaySet(SetOfStrings.cartesianProduct(setB, setA)) + "</div>";

}

displaySet = (resultSet) => {
    if (resultSet.getSize() === 0) {
        return "&empty;";
    } else {
        return resultSet.setAsText();
    }
}
