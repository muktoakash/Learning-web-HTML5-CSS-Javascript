document.getElementById("standardValues"), addEventListener("click", function () {
    this.document.getElementById("the_name").value = "Your Name";
    this.document.getElementById("the_email").value = "you@yourdomain.com";
    this.document.gbForm.like_it.checked = true;
    this.document.gbForm.choose_scake.value = "10";
    this.document.gbForm.the_best.checked = true;
    this.document.gbForm.best_thing[2].checked = true;
    this.document.getElementById("the_worst").value = "Nothing";
    this.document.gbForm.how_improve.value = "More about the dandelions.";
    this.document.getElementById("errors").innerHTML =
        "<p>Don't forget to give your feedback and submit the form.</p>";
    this.document.gbForm.message.focus();
});
