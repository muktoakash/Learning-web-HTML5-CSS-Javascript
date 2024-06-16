document.getElementById("eShow").addEventListener("click", function () {
    this.style.display = 'none';
    document.getElementById("eHide").style.display = 'block';
    document.getElementById("elevation").style.display = 'block';
})
document.getElementById("eHide").addEventListener("click", function () {
    this.style.display = 'none';
    document.getElementById("eShow").style.display = 'block';
    document.getElementById("elevation").style.display = 'none';
})
document.getElementById("pShow").addEventListener("click", function () {
    this.style.display = 'none';
    document.getElementById("pHide").style.display = 'block';
    document.getElementById("photos").style.display = 'block';
})
document.getElementById("pHide").addEventListener("click", function () {
    this.style.display = 'none';
    document.getElementById("pShow").style.display = 'block';
    document.getElementById("photos").style.display = 'none';
})
