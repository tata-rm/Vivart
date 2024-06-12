

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


function buscar() {
    const cidade = document.getElementById("cidade")
    const texto = document.getElementById("cursos")

    if(cidade.value == "metropolitana") {
        texto.innerHTML = `
            Escolas: <br>
            - Nossa senhora aparecida
        `
    } else if(cidade.value == "canoas") {
        texto.innerHTML = `
        Escolas: <br>
        - Padre Reus
    `
    }
}