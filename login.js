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