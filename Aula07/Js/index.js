/* 
//Alguns tipo de Dados primitivo

 - String
 - Number
 - Boolean
 - Undefined -> não aponta pra local nenhuma na memória
 - Null -> não aponta pra local nenhuma na memória
*/

const nome = "item"; // String
const nome2 = `item2`; // String
const nome3 = "item3"; // String

const num1 = 10; // Number
const num2 = 15.02; // Number

let nomeAluno; // Undefined (O VALOR NÃO ESTÁ DEFINIDO)
let sobrenomeAluno = null; // Null (VAZIO, NÃO EXISTE VALOR)
// null em js é considerado object

// Boolean => é um valor lógico
// responsavel por fazer uma mudança no fluxo da aplicação
const aprovadoAluno = true;

//caso eu queria ver um tipo de qualquer variavel, devo utilizar o (typeof), exemplo:

// string
console.log(typeof nome, nome);
console.log(typeof nome2, nome2);
console.log(typeof nome3, nome3);
console.log(" "); // espaço no console

// number
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(" "); // espaço no console

// undefined and null
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(" "); // espaço no console

// boolean
console.log(typeof aprovadoAluno, aprovadoAluno);
console.log(" "); // espaço no console

// Quando tempos valor de referência eles se relacionam entre si
//ou seja, qualquer alteração que mudar o valor de uma variavel
//podera alterar a outra, exemplos:

const Array = [1, 2, 3];
const Array2 = Array;
console.log(Array, Array2); // Ambos valores são [1,2,3]
console.log(" "); // espaço no console

Array2.push(4);
console.log(Array, Array2); // Amobs valores são mudadas para [1, 2, 3, 4]
console.log(" "); // espaço no console

// Em teoria o push adicionaria o valor 4 apenas no seguindo Array,
// porem o valor é adicionado em ambos Array's

// Já com os dados primitivos, os valores não estão relacionados
// sim são copias dos outros, exemplos

let a = 2;
let b = a;
console.log(a, b); // 2, 2
console.log(" "); // espaço no console

a = 3;
console.log(a, b); // 3, 2

// Quando usamos valores primitivos tempo uma copia da quele dado passado na variavel
// já quando temos dados por refencia os dados apontam o mesmo local na memoria 
