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

const button_oportuniza = document.getElementById("button_oportuniza");
const button_oportunizado = document.getElementById("button_oportunizado");

button_oportunizado.onclick = async function(event) {

    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha_oportunizado").value;

    let data = {cpf, senha}

    const response = await fetch('http://localhost:3003/api/loginOportunizado', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result)

    if(result.success) {
        window.location.href = "../perfil/perfil.html"
    } else {
        alert(result.message)
    }
}

button_oportuniza.onclick = async function(event) {

    let cnpj = document.getElementById("cnpj").value;
    let senha = document.getElementById("senha_oportuniza").value;

    let data = {cnpj, senha}

    const response = await fetch('http://localhost:3003/api/loginOportuniza', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.success) {
        window.location.href = "../perfil/perfil.html"
    } else {
        alert(result.message)
    }
}