// FOR IN - ESTRUTURA DE REPETIÇÃO

//Array com apenas um par de colchetes e chamado de VETOR, array de unica dimenção

const frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++ ){  console.log( frutas[i] );  }


console.log(""); // Quebra de linha no console.


//For in ==> lê os indices(Array) ou chaves do objeto

for /* palavra reservada */ (let/* palavra reservada */ indice /*responsavel por pegar o indice */ in /*no*/ frutas/* Array de frutas */){
    console.log(frutas[indice]);// retorna todas as frutas no console;
}


console.log(""); // Quebra de linha no console.


const pessoas = {
    nome: 'GODOLFREDO',
    sobrenome: 'CLADIMISON LIMA',
    idade: 35
};

for(let index in pessoas){
    console.log(pessoas[index])
}



console.log(""); // Quebra de linha no console.



//Acesando o acessando valores da chaves individualmente

console.log(pessoas.nome);
console.log(pessoas['sobrenome']);

const chaves = 'nome';
console.log(pessoas[chaves]);