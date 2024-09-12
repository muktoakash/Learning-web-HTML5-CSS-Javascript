// setOps.js
// Tests the implementation of set operations from set.js

const setA = new SetOfStrings();
const setB = new SetOfStrings();

document.querySelector("#createSetOps").addEventListener("click", () => {
    let setAInput = document.getElementById("insertSetA").value;
    let setAList = setAInput.split(",");
    setAList = setAList.map(x => x.trim());
    console.log(setAList);
}
)
