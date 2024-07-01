const but_oportuniza = document.getElementById("but_oportuniza");
const cadastro_oportuniza = document.getElementById("cadastro_oportuniza");

but_oportuniza.addEventListener("click", function () {
    if (cadastro_oportuniza.style.zIndex === "-1") {
        cadastro_oportuniza.style.zIndex = "1";
    } else {
        cadastro_oportuniza.style.zIndex = "-1";
    }
});

const but_oportunizado = document.getElementById("but_oportunizado");
const cadastro_oportunizado = document.getElementById("cadastro_oportunizado");

but_oportunizado.addEventListener("click", function() {
    if (cadastro_oportunizado.style.zIndex === "-1") {
        cadastro_oportunizado.style.zIndex = "1";
    } else {
        cadastro_oportunizado.style.zIndex = "-1";
    }
});

 let enviarOportuniza = document.getElementById("enviarOportuniza");
 enviarOportuniza.onclick = async function() {

    let nomeOportuniza = document.getElementById("nomeOportuniza").value;
    let data_nascOportuniza = document.getElementById("data_nascOportuniza").value;
    let cnpjOportuniza = document.getElementById("cnpjOportuniza").value;
    let emailOportuniza = document.getElementById("emailOportuniza").value;
    let celOportuniza = document.getElementById("celOportuniza").value;
    let experiênciasOportuniza = document.getElementById("experiênciasOportuniza").value;
    let senhaOportuniza = document.getElementById("senhaOportuniza").value;
    let dançaOportuniza = document.getElementById("dançaOportuniza").value;
    let teatroOportuniza = document.getElementById("teatroOportuniza").value;
    let musicaOportuniza = document.getElementById("musicaOportuniza").value;
    let docOportuniza = document.getElementById("docOportuniza").value;
    let data = {nomeOportuniza, data_nascOportuniza, cnpjOportuniza, emailOportuniza, celOportuniza, experiênciasOportuniza, senhaOportuniza, dançaOportuniza, teatroOportuniza, musicaOportuniza, docOportuniza};

    const response = await fetch('http://localhost:3003/api/store/oportuniza', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(err.response.data)

    if(content.sucess) {
        alert("Sucesso")
    } else {
        alert("Não");
    }
}

let enviarOportunizado = document.getElementById("enviarOportunizado");
enviarOportunizado.onclick = async function() {

    let form = document.getElementById("form");
    let dadosForm = new FormData(form);

    const response = await fetch('http://localhost:3003/api/store/oportuniza', {
       method: "POST",
       body: dadosForm
   });

   let content = await response.json();
   console.log(err.response.data)

   if(content.sucess) {
       alert("Sucesso")
   } else {
       alert("Não");
   }
}
