//criar arquivo .env e instalar node_modules

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
    const result = await response.json();

    if(result.sucess) {
        const escolas = document.querySelectorAll('cursos');
        result.data.forEach(escolas => {
            const nome = document.createElemente('p');
            nome.textContent = escolas.nome;
        }) 
        
        escolas.appendChild(nome);
    } else {
        console.log("Erro", result.sql);
    }
});
