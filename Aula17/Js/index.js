// Quando falamos dos tipos de dados estamos falando do valor do valor.
/*   
Primitivos (Imutaveis)- string, number, boolean, null (bigint, symbol)
Referencia (Mutavel) - array, object, function
*/
//Dados primitivos são valores i 
//Quando usamos dados primitivos estamos fazendo uma copia do dado, exemplo:

let a = `A`;
let b = a; //  Copia de A 

console.log(a, b) // A A 

a = "Outra coisa"
console.log(a, b) // deste modo não afeto o valor de B
// Sempre que uma variavel for igual outra variavel com dados primitivos


// --- --- //


// Valores de referencia:

let aTest = [1, 2, 3];
let bTest = aTest
console.log(aTest, bTest )

aTest.push(4)
console.log(aTest)

bTest.pop()
console.log(aTest, bTest)

// Valores de referencia alteram ambos as condições
// Valores primitivos são copias dos outros valores, Primitivos são valores COPIADO

// Valores de Referencia são relacionados um ao outro, deste modo ambos APONTAM O MESMO LUGAR NA MEMORIA.


// --- --- //


//PRIMITIVOS ==> COPIA DO VALORE
//REFERENCIA ==> APONTA O VALOR / TEM O MESMO VALOR 

const A = {
    nome:`Emanuel`,
    sobrenome:`Martins`
};

const B = A; 
// B aponta no mesmo local da memoria que A, logo ambos tem o mesmo valor

A.nome = `Jorge`
console.log(B)

//Para que ambos valores não se referencie devemos usar Spread

const C = {
    nome:"Natasha",
    sobrenome:"Silva"
};

const D = {...C}
C.nome = "Rita" // Alteração do C 

console.log(D)
console.log(C)

//Desta maneira o valor não irá ser alterado