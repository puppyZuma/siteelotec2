
let banco_de_dados= [
    {user: "andley", Senha: "111"},
    {user: "thiago", Senha: "222"}
];






function verificar () {
    if(pass === banco_de_dados(Senha));
    const password = document.getElementById("pass");
    const username = document.getElementById("username");
    const msg = document.getElementById("msg");

    const encontrado = banco_de_dados.find(u => u.user === username && u.senha === password);
    if (encontrado) {
        window.location.href = "Conta.html";}else{
            msg.innerText = "Usuario ou senha incorreto"
        }
    }