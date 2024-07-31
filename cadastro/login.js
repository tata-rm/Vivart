const opcoes_oportunizado = document.getElementById("opcoes_oportunizado");
const opcoes_oportuniza = document.getElementById("opcoes_oportuniza");
const login_oportunizado = document.getElementById("login_oportunizado");
const login_oportuniza = document.getElementById("login_oportuniza");

opcoes_oportunizado.addEventListener("click", function(event) {
    login_oportunizado.style.zIndex = "2";
    event.stopPropagation();
});

opcoes_oportuniza.addEventListener("click", function(event){
    login_oportuniza.style.zIndex = "2";
    event.stopPropagation();
})

/*---------------------------------------------------------------*/

async function getOportuniza() {

    const data = {cnpj: '12345678901234', senha: 'tata'}

    const response = fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {"Content-Type": "application/js"},
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.sucess) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}

let call = getOportuniza();