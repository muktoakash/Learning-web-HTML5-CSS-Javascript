document.getElementById("openNew").addEventListener("click", function ({
    newWin = window.open("", "NewWin", "toolbar=no, status=no, width=200, height=100");
}));

document.getElementById("closeNew").addEventListener("click", function ({
    newWin.close();
}));
