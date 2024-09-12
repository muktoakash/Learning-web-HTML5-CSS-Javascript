// setOps.js
// Tests the implementation of set operations from set.js

const setA = new SetOfStrings();
const setB = new SetOfStrings();

document.querySelector("#createSetOps").addEventListener("click", () => {
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
}
)
