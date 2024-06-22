document.getElementById("alert").addEventListener("click", function(){
    alertVal = window.alert("This is a test alert.");
});
document.getElementById("confirm").addEventListener("click", function(){
    confirmVal = window.alert("Would you like to confirm?");
});
document.getElementById("promt").addEventListener("click", function(){
    promptVal = window.alert("Enter Text:", "This is the default");
});
