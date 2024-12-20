function showHide(){
    if (!document.getElementById) return;

    var heading1 = document.getElementById("heading1");
    var heading2 = document.getElementById("heading2");
    var showheading1 = document.checkboxform.checkbox1.checked;
    var showheading2 = document.checkboxform.checkbox2.checked;
    heading1.style.visibility = (showheading1) ? "visible" : "hidden";
    heading2.style.visibility = (showheading2) ? "visible" : "hidden";
}