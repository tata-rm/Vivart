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

function leituras(element, id, nome) {
    const estrela = element;
    estrela.classList.toggle('pb');
 
    const userId = localStorage.getItem('userId'); // Obtém o ID do usuário
    console.log(userId);
 
    let data = { id_user: userId, id_book: id, titulo: nome }; // Inclui o ID do usuário e do livro
    console.log(data);
 
    fetch(`http://localhost:3003/api/store/book`, { // Altere a URL para a rota correta
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Tarefa armazenada com sucesso!');
            } else {
                alert('Erro ao armazenar a tarefa: ' + result.message);
            }
        })
        .catch(error => console.error('Erro ao armazenar:', error));
}
 
function toggleEstrela(element, id, nome, thumbnail) {
    let estrela = element;
    let idUser = localStorage.getItem('userId')
    // console.log(id)
    estrela.classList.toggle('pb')
    let data = { id, idUser, nome, thumbnail };
 
    const response = fetch("http://localhost:3003/API/store/book", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    });
 
 
 
}
 
function searchBooks() {
    let searchInput = document.getElementById('searchInput').value;
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(searchInput);
 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error('Erro ao buscar livros:', error));
}
 
function displayResults(books) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
 
    if (books.length === 0) {
        resultsContainer.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }
 
    books.forEach(book => {
 
        let id = book.id;
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido';
        let description = book.volumeInfo.description ? book.volumeInfo.description : 'Descrição indisponível';
        let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150';
        console.log(`ID DO LIVRO ${title} = ${id}`)
        let bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h2>${title} <img class="estrela pb" onclick="toggleEstrela(this, '${id}', '${title}', '${thumbnail}')" src="../assets/estrela amarela.png" alt=""> </h2>
            <img src="${thumbnail}" alt="Capa do Livro">
            <p><strong>Autores:</strong> ${authors}</p>
            <p><strong>Descrição:</strong> ${description}</p>
            <hr>
        `;
        resultsContainer.appendChild(bookElement);
 
 
 
    });
}
 
const next = document.getElementById("goProfile");
 
next.addEventListener('click', () => {
    window.location.href = "../profile/profile.html";
});