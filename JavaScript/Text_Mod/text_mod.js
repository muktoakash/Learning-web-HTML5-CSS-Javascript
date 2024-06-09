function changeTitle() {
    if (!document.getElementById) return;
    var newTitle = document.changeForm.newTitle.value;
    var heading1 = document.getElementById("heading1");
    heading1.firstChild.nodeValue = newTitle;
}
