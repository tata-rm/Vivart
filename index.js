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

async function getAllPost(event) {

    const response = await fetch(`http://localhost:3005/api/get/getAllPost/`, {
        method: "GET"
    });

    const result = await response.json();
    console.log(result)

    if(result.success) {
        let html = document.getElementById("meio");

        if(result.data.img) {
            let url = "http://localhost:3005/image/";
            document.getElementById('conteudo').src = url + result.data.img
        }
        
        result.data.forEach(dado => {
            console.log(dado.img)
            let post = 
            `<div id="post">
                <p></p>
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
window.onload = getAllPost();
