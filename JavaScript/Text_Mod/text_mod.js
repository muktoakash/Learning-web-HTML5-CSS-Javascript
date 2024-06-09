function changeTitle() {
    if (!document.getElementById) return;
    var newTitle = document.changeForm.newTitle.value;
    var heading1 = document.getElementById("heading1");
    heading1.firstChild.nodeValue = newTitle;
}

function addText() {
    if (!document.getElementById) return;
    var sentence = document.changeForm2.sentence.value;
    var node = document.createTextNode(" " + sentence);
    document.getElementById("paragraph1").appendChild(node);
    document.changeForm2.sentence.value = "";
}
