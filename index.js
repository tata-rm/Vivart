

const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");

logo.addEventListener("click", function(event) {
        overlay.style.zIndex = "1";
        event.stopPropagation();
});

overlay.addEventListener("click", function(event){
    event.stopPropagation();
})
 
document.addEventListener("click", function() {
    overlay.style.zIndex = "-1";
});


document.addEventListener('DOMContentLoaded', async () =>{
    const response = await fetch('http://localhost:3000/api/get/escolas/');

    console.log(result);
});
