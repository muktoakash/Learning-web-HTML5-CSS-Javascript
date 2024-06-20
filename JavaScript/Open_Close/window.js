document.getElementById("openNew").addEventListener("click", function ({
    newWin = window.open("", "NewWin", "toolbar=no, status=no, width=200, height=100");
}));

document.getElementById("closeNew").addEventListener("click", function ({
    newWin.close();
}));

function doIt() {
    if ((document.changeForm.w.value) &&
        (document.changeForm.h.value)) {
        newWin.resizeTo(document.changeForm.w.value,
            document.changeForm.h.value
        );
    }
    if ((document.changeForm.x.value) &&
        (document.changeForm.y.value)) {
        newWin.moveTo(document.changeForm.x.value,
            document.changeForm.y.value
        );
    }
}

window.addEventListener("load", function () {
    newWin = this.window.open('', "NewWin", 'width=200,height=100');
})

document.getElementById("doIt").addEventListener("click", doIt);
