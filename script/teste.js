
let lista = [

];

let entrada;

while (true) {
    entrada = prompt("Digite algo (ou 'sair' para parar):");

    if (entrada === "sair") {
        break;
    }

    lista.push(entrada);
}

console.log(lista);
