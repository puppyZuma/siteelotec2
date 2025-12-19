
let banco_de_dados= [
    {user: "andley", Senha: 111},
    {user: "thiago", Senha: 222}
];






function verificar () {
    if(pass === banco_de_dados(Senha));
    let password = document.getElementById("pass");
    let username = document.getElementById("username");
    let encontrado = banco_de_dados.find(u => u.user === username && u.senha === password);
    if (encontrado) {
        alert("ok");}else{
            alert("usuario ou senha incorretos")
        }
    }