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

async function addPost() {
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario);
    //let cpf = usuario.cpf
    const content = document.getElementById("inputOverlay").value;
    if (content.trim()) {
      const response = await fetch('http://localhost:3005/api/store/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });
  
      if (response.ok) {
        document.getElementById("post-content").value = ""; // Limpar o campo
        loadPosts(); // Atualizar o feed com a nova postagem
      }
    } else {
      alert("Por favor, escreva algo antes de publicar.");
    }
  }
  
  async function loadPosts() {
    const response = await fetch('/api/posts');
    const posts = await response.json();
  
    const feed = document.getElementById("feed");
    feed.innerHTML = posts.map(post => `<p>${post.content}</p>`).join('');
  }
  
/*---------------------------------------------------*/

const imgPerfil = document.getElementById('img_perfil');
const mudar_img = document.getElementById('mudar_img');

imgPerfil.style.cursor = "pointer"

function abrirFile() {
    mudar_img.click();
}

mudar_img.addEventListener('change', function() {
    const file = this.files[0];
    console.log(file)
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
    console.log(result)

    if(result.success) {
        let html = document.getElementById("info_perfil");

        if(result.data.fotoPerfil) {
            let url = "http://localhost:3003/images/";
            document.getElementById('img_perfil').src = url + result.data.fotoPerfil
        }

        let nome = 
        `<div id="info">
                <p>${result.data.nome}</p>
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