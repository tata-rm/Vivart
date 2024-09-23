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
 enviarOportuniza.onclick = async function(event) {
    event.preventDefault();

    let form_oportuniza = document.getElementById("cadastro_oportuniza");
    let dadosForm = new FormData(form_oportuniza);

    let danca = document.getElementById("dançaOportuniza").value;
    let musica = document.getElementById("musicaOportuniza").value;
    let teatro = document.getElementById("teatroOportuniza").value;
    let areaOportuniza = ""
    if (danca === "on" && teatro === "on" && musica === "on") {
        areaOportuniza = "Dança, teatro e música";
    } else if (danca === "on" && teatro === "on") {
        areaOportuniza = "Dança e teatro";
    } else if (teatro === "on" && musica === "on") {
        areaOportuniza = "Teatro e música";
    } else if (danca === "on" && musica === "on") {
        areaOportuniza = "Dança e música";
    } else if (danca === "on") {
        areaOportuniza = "Dança";
    } else if (teatro == "on") {
        areaOportuniza = "Teatro";
    } else {
        areaOportuniza = "Música";
    }
    dadosForm.append('areaOportuniza', areaOportuniza);

    const response = await fetch('http://localhost:3005/api/oportuniza/create', {
        method: "POST",
        body: dadosForm
    });

    let content = await response.json();

    if(content.success) {
        window.location.href = "login.html"
    } else {
        alert("Não");
    }
};

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

    if (danca === "on" && teatro === "on" && musica === "on") {
        areaOportunizado = "Dança, teatro e música";
    } else if (danca === "on" && teatro === "on") {
        areaOportunizado = "Dança e teatro";
    } else if (teatro === "on" && musica === "on") {
        areaOportunizado = "Teatro e música";
    } else if (danca === "on" && musica === "on") {
        areaOportunizado = "Dança e música";
    } else if (danca === "on") {
        areaOportunizado = "Dança";
    } else if (teatro == "on") {
        areaOportunizado = "Teatro";
    } else {
        areaOportunizado = "Música";
    }
    dadosForm.append('areaOportunizado', areaOportunizado);


    const response = await fetch('http://localhost:3005/api/oportunizado/create', {
       method: "POST",
       body: dadosForm
   });

   let content = await response.json();

   if(content.success) {
        window.location.href = "login.html"
   } else {
        alert("Não");
   }

   
};
