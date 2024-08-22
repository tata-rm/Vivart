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

const imgPerfil = document.getElementById('img_perfil');
const mudar_img = document.getElementById('mudar_img');

mudar_img.addEventListener('change', function() {
    const file = this.files[0];
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

        const response = await fetch('http://localhost:3003/api/atualizarFotoPerfil', {
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

uploadFoto.addEventListener('change', enviarFotoPerfil);

/*---------------------------------------------------*/

async function getPerfil(event) {

    //rota get
    let cpf = localStorage.getItem('cpfUser');

    let data = {cpf}

    const response = await fetch(`http://localhost:3003/api/getOportunizado/${cpf}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
       // body: JSON.stringify(data)
    });

    const result = await response.json();
    //console.log(result)

    if(result.success) {
        let html = document.getElementById("info_perfil");

        let nome = `<p>${perfil.nome}</p>`;
        let email = `<p>${result.data.email}</p>`;
        let area = `<p>${result.data.area}</p>`;

        html.innerHTML = nome + email + area;
    
    } else {
        alert(result.message)
    }
}
window.onload = getPerfil();