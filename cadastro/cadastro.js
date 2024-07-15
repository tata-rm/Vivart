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


/*--------------------------------------------------------------------------*/

 let enviarOportuniza = document.getElementById("enviarOportuniza");
 enviarOportuniza.onclick = async function() {

    let nomeOportuniza = document.getElementById("nomeOportuniza").value;
    let data_inicioOportuniza = document.getElementById("data_inicioOportuniza").value;
    let cnpjOportuniza = document.getElementById("cnpjOportuniza").value;
    let emailOportuniza = document.getElementById("emailOportuniza").value;
    let celOportuniza = document.getElementById("celOportuniza").value;
    let experiênciasOportuniza = document.getElementById("experiênciasOportuniza").value;
    let senhaOportuniza = document.getElementById("senhaOportuniza").value;
    let danca = document.getElementById("dançaOportuniza").value;
    let musica = document.getElementById("musicaOportuniza").value;
    let teatro = document.getElementById("teatroOportuniza").value;
    let areaOportuniza = ""
    if (danca === "on" + teatro === "on" + musica === "on") {
        areaOportuniza = danca + teatro + musica;
    } else if (danca === "on" + teatro === "on") {
        areaOportuniza = danca + teatro;
    } else if (teatro === "on" + musica === "on") {
        areaOportuniza = teatro + musica;
    } else if (danca === "on" + musica === "on") {
        areaOportuniza = danca + musica;
    } else if (danca === "on") {
        areaOportuniza = danca;
    } else if (teatro == "on") {
        areaOportuniza = teatro;
    } else {
        areaOportuniza = musica;
    }


    let docOportuniza = document.getElementById("docOportuniza").value;
    let data = {nomeOportuniza, data_inicioOportuniza, cnpjOportuniza, emailOportuniza, celOportuniza, experiênciasOportuniza, senhaOportuniza, areaOportuniza, docOportuniza};

    const response = await fetch('http://localhost:3003/api/oportuniza/create', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        alert("Sucesso")
    } else {
        alert("Não");
    }
}

/*----------------------------------------------------------------*/

let enviarOportunizado = document.getElementById("enviarOportunizado");
enviarOportunizado.onclick = async function(event) {
    event.preventDefault();

    let form_oportunizado = document.getElementById("cadastro_oportunizado");
    let dadosForm = new FormData(form_oportunizado);

    let danca = document.getElementById("dançaOportuniza").value;
    let musica = document.getElementById("musicaOportuniza").value;
    let teatro = document.getElementById("teatroOportuniza").value;
    let areaOportunizado = ""
    if (danca === "on" + teatro === "on" + musica === "on") {
        areaOportunizado = danca + teatro + musica;
    } else if (danca === "on" + teatro === "on") {
        areaOportunizado = danca + teatro;
    } else if (teatro === "on" + musica === "on") {
        areaOportunizado = teatro + musica;
    } else if (danca === "on" + musica === "on") {
        areaOportunizado = danca + musica;
    } else if (danca === "on") {
        areaOportunizado = danca;
    } else if (teatro == "on") {
        areaOportunizado = teatro;
    } else {
        areaOportunizado = musica;
    }
    dadosForm.append('areaOportunizado', areaOportunizado);


    const response = await fetch('http://localhost:3003/api/oportunizado/create', {
       method: "POST",
       body: dadosForm
   });

   let content = await response.json();

   if(content.sucess) {
       alert("Sucesso")
   } else {
       alert("Não");
   }
};
