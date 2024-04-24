const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");

logo.addEventListener("click", function() {
    if (overlay.style.zIndex === "-1") {
        overlay.style.zIndex = "1";
    } else {
        overlay.style.zIndex = "-1";
    }
});
 
