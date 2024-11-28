document.addEventListener("DOMContentLoaded", async function() {
    // Garantir que a URL tenha o parâmetro CPF
    const cpf = getQueryParam("cpf");

    if (!cpf) {
        alert("CPF não encontrado na URL");
        return;
    }

    const response = await fetch(`http://localhost:3005/api/getOportunizado/${cpf}`);
    const result = await response.json();
    console.log(result.data);
    if (result.success) {
        // Preencher os campos com os dados do usuário
        document.getElementById('nomeUsuario').textContent = result.data.nome;
        document.getElementById('fotoPerfil').src = `http://localhost:3005/images/${result.data.fotoPerfil}`;
        document.getElementById('cpfUsuario').textContent = `CPF: ${result.data.cpf}`;
        document.getElementById('emailUsuario').textContent = `Email: ${result.data.email}`;
        // Adicione outros campos conforme necessário
    } else {
        alert(result.message);
    }
});

// Função para pegar o valor do parâmetro 'cpf' na URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
