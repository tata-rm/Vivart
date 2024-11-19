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

function Leituras() {
    let pesquisar = document.getElementById('pesquisar').value;
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(pesquisar);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error('Erro ao buscar livros:', error));
}

function enviarLivro(livro) {
    const dadosLivro = {
        nome: livro.volumeInfo.title,
        autor: livro.volumeInfo.authors ? livro.volumeInfo.authors.join(', ') : 'Autor desconhecido',
        data_lançamento: livro.volumeInfo.publishedDate || null,
        quant_páginas: livro.volumeInfo.pageCount || 0,
        area: livro.volumeInfo.categories ? livro.volumeInfo.categories[0] : 'desconhecida',
        thumbnail: livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'
    };

    fetch('https://www.googleapis.com/books/v1/volumes?q=', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosLivro),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Livro cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar o livro.');
        }
    })
    .catch(error => console.error('Erro ao enviar dados:', error));
}

const predefinedBooks = [
    {
        id: "1",
        volumeInfo: {
            title: "O Senhor dos Anéis",
            authors: ["J.R.R. Tolkien"],
            publishedDate: "1954",
            imageLinks: {
                thumbnail: "https://via.placeholder.com/150"
            }
        }
    },
    {
        id: "2",
        volumeInfo: {
            title: "1984",
            authors: ["George Orwell"],
            publishedDate: "1949",
            imageLinks: {
                thumbnail: "https://via.placeholder.com/150"
            }
        }
    },
    {
        id: "3",
        volumeInfo: {
            title: "Dom Quixote",
            authors: ["Miguel de Cervantes"],
            publishedDate: "1605",
            imageLinks: {
                thumbnail: "https://via.placeholder.com/150"
            }
        }
    }
];

function displayResults(books) {
    let resultsContainer = document.getElementById('livros');
    resultsContainer.innerHTML = '';

    if (books.length === 0) {
        resultsContainer.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }

    books.forEach(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconhecido';
        let data = book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Data indisponível';
        let thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150';

        let bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h2>${title}</h2>
            <img src="${thumbnail}" alt="Capa do Livro">
            <p>${data}</p>
            <p>${authors}</p>
        `;
        resultsContainer.appendChild(bookElement);
    });

    document.addEventListener('DOMContentLoaded', () => {
        displayResults(predefinedBooks);
    });
}