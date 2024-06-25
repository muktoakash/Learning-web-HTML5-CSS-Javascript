function display() {
    dispWin = window.open('', 'NewWin',
        'menubar=no, toolbar=no, status=no, width=400, height=100'
    );

    message = "<ul><li>NAME: " +
        document.form1.name.value;
    message += "<li>ADDRESS: " +
        document.form1.address.value;
    message += "<li>PHONE: " +
        document.form1.phone.value;
    message += "</ul>";
    dispWin.document.write(message);
}
