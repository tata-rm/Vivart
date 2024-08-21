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

async function getPerfil(event) {

    //rota get
    let cpf = localStorage.getItem('cpfUser');

    let data = {cpf}

    const response = fetch("http://localhost:3003/api/oportunizado/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    //console.log(result)

    if(result.success) {
        let html = document.getElementById("info_perfil");

        let nome = "<p>" + perfil.nome + "</p>";
    
        html.innerHTML = nome;
    } else {
        alert(result.message)
    }
}
getPerfil();