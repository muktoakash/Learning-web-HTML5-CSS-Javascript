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
