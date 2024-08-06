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

/*---------------------------------------------------*/

const button = document.getElementById('buscar');
const selectCidade = document.getElementById('cidade');

button.addEventListener('click', async () =>{
    const cidadeSelecionada = selectCidade.value;

    const response = await fetch(`http://localhost:3003/api/get/escolas/${cidadeSelecionada}`);
    const result = await response.json();
    console.log(result);
    if(result.success) {
        const cursosDiv = document.querySelectorAll('.cursos')[0];
        cursosDiv.innerHTML = '';

        result.data.forEach(escolas => {
            const nome = document.createElement('p');
            nome.textContent = escolas.nome;

            cursosDiv.appendChild(nome);
        }) 
        
    } else {
        console.log("Erro", result.sql);
    }
});


