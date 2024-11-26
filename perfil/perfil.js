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

const barra = document.getElementById("button_barra");
const overlay_barra = document.getElementById("overlay_barra");


barra.addEventListener("click", function(event) {
    overlay_barra.style.display = "flex";
    event.stopPropagation();
});

overlay_barra.addEventListener("click", function(event){
    event.stopPropagation();
})
 
document.addEventListener("click", function() {
    overlay_barra.style.display = "none";
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
let enviarPost = document.getElementById('enviarPost');

enviarPost.onclick = async function(event) {
    event.preventDefault();

    const storedAccount = localStorage.getItem('usuario');
    const account = JSON.parse(storedAccount);
    //console.log(account);  

    let camposPost = document.getElementById('camposPost');
    let dadosPost = new FormData(camposPost);
    let nomePost = account.nome;
    let cpfPost = account.cpf;
    let perfilPost = account.fotoPerfil;
    //console.log(nomePost)
    //console.log(cpfPost)
    
    dadosPost.append('camposPost', camposPost)
    dadosPost.append('nomePost', nomePost);
    dadosPost.append('cpfPost', cpfPost);
    dadosPost.append('perfilPost', perfilPost);

    try {
        const response = await fetch('http://localhost:3005/api/store/post', {
            method: 'POST',
            body: dadosPost
        });
        //console.log(dadosPost)

        let content = await response.json();

        if (content.success) {
            alert(content.message)
        } else {
            alert("Erro ao publicar.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Houve um problema ao processar a publicação.");
    }
};
  
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
            
            let post = 
            `<div id="post">
                <p id="opcoes">Oportunizado</p>
                <div id="nomeImg">
                    <img id="imgPerfil" src="http://localhost:3005/images/${dado.fotoPerfil}"> </img>
                    <p id="nome">${dado.nome}</p>
                </div>
                <p id="texto">${dado.texto}</p>
                <img id="conteudo" src="http://localhost:3005/images/${dado.img}"> </img>
            </div>`;
    
            html.innerHTML += post;
        });
    
    } else {
        alert(result.message)
    }
}
window.onload = getPost();

/*---------------------------------------------------*/

const imgPerfil = document.getElementById('img_perfil');
const mudar_img = document.getElementById('mudar_img');

imgPerfil.style.cursor = "pointer"

function abrirFile() {
    mudar_img.click();
}

mudar_img.addEventListener('change', function() {
    const file = this.files[0];
    //console.log(file)
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgPerfil.src = e.target.result; // Altera a imagem de perfil para a pré-visualização
        }
        reader.readAsDataURL(file); // Lê o arquivo selecionado como uma URL
    }
});

async function enviarImgPerfil() {
    const file = mudar_img.files[0]; // Obter o arquivo selecionado

    if (file) {
        const formData = new FormData();
        formData.append('fotoPerfil', file); // Adiciona o arquivo à requisição
        formData.append('cpfUser', localStorage.getItem('cpfUser'))

        const response = await fetch('http://localhost:3005/api/atualizarImgPerfil', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert('Foto de perfil atualizada com sucesso!');
        } else {
            alert('Erro ao atualizar a foto de perfil.');
        }
    } else {
        alert('Por favor, selecione uma imagem.');
    }
}
const uploadFoto = document.getElementById("mudar_img")
uploadFoto.addEventListener('change', enviarImgPerfil);

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