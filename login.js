const banco_de_dados_user = [
    {user: "andley", senha: "111"},
    
];

const banco_de_dados_pass = [
    {user: "thiago", senha: "222"},
]

const password = document.getElementById("pass");
const user = document.getElementById("username");

const pass = password.value;
const username = username.value;

function add_user () {
    banco_de_dados_user.push(item);
    banco_de_dados_pass.push(item)
};

function remove_user () {
    banco_de_dados_pass.pop()
    banco_de_dados_user.pop()

}

function update_user () {

}


