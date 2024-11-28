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

const openOverlay = document.getElementById('openOverlay');
const fecharOverlay = document.getElementById('fecharOverlay');
const postOverlay = document.getElementById('postOverlay');

openOverlay.addEventListener('click', function(event) {
    postOverlay.style.display = 'flex';
    event.stopPropagation();
});

fecharOverlay.addEventListener("click", function(event){
    postOverlay.style.display = 'none';
    event.stopPropagation();
})
  
/*---------------------------------------------------*/

async function getPost(event) {

    let idPost = localStorage.getItem('cpfUser');

    let data = {idPost}

    const response = await fetch(`http://localhost:3005/api/get/post/${idPost}`, {
        method: "GET"
    });

    const result = await response.json();
    console.log(result)

    if(result.success) {
        let html = document.getElementById("postagens_perfil");

        if(result.data.img) {
            let url = "http://localhost:3005/image/";
            document.getElementById('conteudo').src = url + result.data.img
        }
        
        result.data.forEach(dado => {
            console.log(dado.img)
            let post = 
            `<div id="post">
                <p id="opcoes">Oportunizado</p>
                <div id="nomeImg">
                    <img id="imgPerfil" src="http://localhost:3005/images/${dado.fotoPerfil}"> </img>
                    <p id="nome">${dado.nome}</p>
                </div>
                <p id="texto">${dado.texto}</p>
                <img id="conteudo" src="http://localhost:3005/post/${dado.img}"> </img>
            </div>`;
    
            html.innerHTML += post;
        });
    
    } else {
        alert(result.message)
    }
}
window.onload = getPost();

/*---------------------------------------------------*/

async function getPerfil(event) {

    let cpf = localStorage.getItem('cpfUser');

    let data = {cpf}

    const response = await fetch(`http://localhost:3005/api/getOportunizado/${cpf}`, {
        method: "GET"
    });

    const result = await response.json();
    //console.log(result)

    if(result.success) {
        let html = document.getElementById("info_perfil");

        if(result.data.fotoPerfil) {
            let url = "http://localhost:3005/images/";
            document.getElementById('img_perfil').src = url + result.data.fotoPerfil
        }

        let nome = 
        `<div id="info">
                <p id="nome">${result.data.nome}</p>
                <p>${result.data.email}</p>
                <p>${result.data.area}</p>
                <p>${result.data.texto}</p>
        </div>`;

        html.innerHTML += nome;
    
    } else {
        alert(result.message)
    }
}
window.onload = getPerfil();