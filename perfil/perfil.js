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
    event.preventDefault();

    //rota get
    let cpf = localStorage.getItem('cpfUser');

    let data = {cpf}

    const response = fetch("", {
        method: "POST",
        headers: {

        },
        body: JSON.stringify(data)
    });


    let html = document.getElementById("");

    let card = "<div>" + perfil.nome + "</div>";

    html.innerHTML = card;
}
getPerfil();