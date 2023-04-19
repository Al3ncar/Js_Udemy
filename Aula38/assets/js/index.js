/*
// While

    A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

    sintaxe lógica:

        while (condição) {
            rotina
        }

        while  =>  palavra reservada ;

        condição  =>  O que vai ser avalido
            true  =>  Continua o laço de reptição;
            false =>  Para o laço de repetição
        ;

        rotina  =>
            Uma declaração que é executada enquanto a condição é avaliada como verdadeira
        ;

*/

let nome = 'Helena';
let i = 0;
let i2 = 0;

while (i <= 10) {
    console.log(i)
    i++ // Incremento de 0 a 10
};

console.log('') // Espaço no console

console.log("Dando errado");

console.log('') // Espaço no console

while (i2 < nome.length) {
    console.log(nome[i2])
    i2++
};

console.log('') // Espaço no console

/*
//Não podemos declarar 2 while com uma mesma declaração

    let i = 0;
    let nome = 'Bertinho';

        while(i <= 10){
            console.log(i)
            i++  // Incremento de 0 a 10
        };

        while (i < nome.length) {
            console.log(nome[i])
            i++
        };
    //caso isso aconteça no console não ira retornar o valor do laço

*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 10;
let rand = random(min, max);

while (rand !== 5) {
    rand = random(min, max);
    console.log(rand);

}

console.log('') // Espaço no console

// O WHILE em lógica significa "enquanto"

/*
// Do While

    Ambos Whiles tem sitaxe semelhante, possuindo apenas uma unica diferença, sendo ela:

        do( FAÇA ){
            rotina( ISSO )
        }while( ENQUANTO )(condição);

    primeiro devemos colocar nossa rotina e depois nossa condição;
*/

function random2(min2, max2) {
    const r = Math.random() * (max2 - min2) + min2;
    return Math.floor(r);
}
const min2 = 1;
const max2 = 10;
let rand2 = random2(min2, max2);

do {
    rand2 = random2(min2, max2);
    console.log(rand2);
} while (rand2 !== 5);