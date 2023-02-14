const lista = require('readline-sync');

let propriedades = [];
let aux = "";

while (aux != 'sair'){

    aux = lista.question('Digite a propriedade: ')
    //aux -> font-size

    propriedades.push(aux);

    aux = lista.question('Para sair digite "sair", para continuar digite qualquer tecla');
}

console.log(propriedades.sort().join('\n'));