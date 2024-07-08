async function getOportuniza() {

    const data = {cnpj: '12345678901234', senha: 'tata'}

    const response = fetch('http://localhost:3005/api/login', {
        method: "POST",
        headers: {"Content-Type": "application/js"},
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if(result.sucess) {
        alert(result.message)
    } else {
        alert(result.message)
    }
}

let call = getOportuniza();