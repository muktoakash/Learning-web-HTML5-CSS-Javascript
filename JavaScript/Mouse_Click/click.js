function mouseStatus(e) {
    if (!e) e = window.event;

    btn = e.button;
    switch (btn) {
        case 0:
            whichone = "Left";
            break;
        case 1:
            whichone = "Middle";
            break;
        case 2:
            whichone = "Right";
            break;
        default:
            whichone = "UNKNOWN";
    }

    message = e.type + " : " + whichone + "<br>";
    document.getElementById('testarea').innerHTML += message;
    e.preventDefault();
}

obj = document.getElementById('testlink');

obj.addEventListener("click", mouseStatus);
obj.addEventListener("mousedown", mouseStatus);
obj.addEventListener("mouseup", mouseStatus);
obj.addEventListener("dblclick", mouseStatus);
