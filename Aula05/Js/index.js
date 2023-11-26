// Não utilize VAR utilize CONST
// Não podemos alterar a const

/*
  const peopleName = "Felix" // Felix
  peopleName = "Lino"  // Erro
*/

/* 
  Quando usamos const com nomes estamos na verdade, 
  apenas usando o valor dessa const 
*/

//Operadores Aritimético Simples

// + --> operadores de SOMA
// - --> operadores de ADÇÃO
// * --> operadores de MULTIPLICAÇÃO
// / --> operadores de DIVISÃO

const firstNumber = 5;
const seconodNumber = 10;

const soma = firstNumber * seconodNumber; //50
console.log(soma);

console.log(" "); // espaço no console

const somaDuplicada = soma * 2;
console.log(somaDuplicada);

console.log(" "); // espaço no console

/* 
  // Deste modo podemos ver que não modificamos a constante
  // Apenas criamos constantes novas
 */

//Temos outra forma de fazer isso como a let

let somaTriplicadado = somaDuplicada * 3;
console.log(somaTriplicadado);

somaTriplicadado += 5;
/* 
  // Desta forma usamos a propria let como valor e somamos
      o resultado a 5
  // Tal ação só deve ocorrer com LET, com CONST não funciona
  // Desta forma tambem não conseguimos recuperar o 
    valor da let de SomaTriplicada 
*/

console.log(somaTriplicadado);

//Temos um indentificador de valor conhecido como TYPEOF
//Para saber o tipo e o valor de uma variavel usando o typeof é nescessario

console.log(" "); // espaço no console

console.log(typeof somaTriplicadado, somaTriplicadado); // number 155
console.log(typeof (somaTriplicadado), somaTriplicadado); // number 155

console.log(" "); // espaço no console

//Inicialmente temos number que é o tipo de dado depois temos o valor

/* 
//Em JavaScript existem 5 tipos de dados diferentes que podem conter valores:

  - string
  - number
  - boolean
  - object
  - function

//Existem 6 tipos de objetos:

  - Object
  - Date
  - Array
  - String
  - Number
  - Boolean

//E 2 tipos de dados que não podem conter valores:

  - null
  - undefined

*/

// Desafio da Aula 05

/* 
 Igor Alencar tenho 17 anos, peso 84 kg
 tenho 1,82 de altura e seu IMC é de 25,922222
 Igor Alencar nasceu em 2004
*/

const myName = "Igor ";
const lastName = "Alencar";
const yeadsOld = 17;
const weight = 84;
const height = 1.82;
let anoAtual = 2022;

let imc = weight / (height * height);
let anoNascido = anoAtual - yeadsOld;

let fullName = myName + lastName;
console.log(fullName);

console.log(
  fullName,
  "tenho",
  yeadsOld,
  "anos, peso",
  weight,
  "kg, tenho",
  height,
  "de altura e meu IMC é de ",
  imc,
  "eu nasci em",
  anoNascido
);

//maneira mais atual de fazer isso
//maneira mais legivel

console.log(
  typeof `Eu sou ${fullName}, eu tenho ${yeadsOld} anos, peso ${weight}kg, 
tenho ${height} de altura e meu IMC é de ${imc} eu nasci em ${anoNascido}.`
);
