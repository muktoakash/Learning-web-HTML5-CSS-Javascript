function graphicBox(box) {
    // be unobtrusive
    if (!document.getElementById) return;

    // find the object and its parent
    obj = document.getElementById(box);
    parentObj = obj.parentNode;

    // hide the regular checkbox
    obj.style.display = "none";

    // create teh image element and set its onclick event
    img = document.createElement("img");
    img.addEventListener("click", Toggle);
    img.scr = "./assets/unchecked.png";

    // save the checkbox id within the imageID
    img.id = "img" + box;

    // display the graphic checkbox
    parentObj.insertBefore(img, obj);
}

function Toggle(e) {
    if (!e) var e = window.event;

    // find the image ID
    img = (e.target) ? e.target : e.srcElement;

    // find the checkbox by removing "img" from the image ID
    checkid = img.id.substring(3);
    checkbox = document.getElementById(checkid);

    // click the checkbox
    checkbox.click();

    // display the right image for the clicked or unclicked state
    if (checkbox.checked) {
        file = "./assets/checked.png";
    } else {
        file = "/assets/unchecked.png";
    }

    img.src = file;
}
