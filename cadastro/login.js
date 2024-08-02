const opcoes_oportunizado = document.getElementById("opcoes_oportunizado");
const opcoes_oportuniza = document.getElementById("opcoes_oportuniza");
const login_oportunizado = document.getElementById("login_oportunizado");
const login_oportuniza = document.getElementById("login_oportuniza");

const login_opcoes = document.getElementById("login_opcoes");

login_opcoes.addEventListener("change", function(event) {
    if(login_opcoes.value == "oportuniza") {
        login_oportuniza.style.display = "flex";
        login_oportunizado.style.display = "none";

    } else if(login_opcoes.value == "oportunizado") {
        login_oportunizado.style.display = "flex";
        login_oportuniza.style.display = "none";
    }
});

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

