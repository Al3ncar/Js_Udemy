/* 
//Alguns tipo de Dados primitivo

 - String
 - Number
 - Boolean
 - Undefined -> não aponta pra local nenhuma na memória
 - Null -> não aponta pra local nenhuma na memória
*/
//String tipo de dado primitivo em JS

//Diferença entre Undefined e null

//undefined (O VALOR NÃO ESTÁ DEFINIDO)
//null (VAZIO, NÃO EXISTE VALOR)

// Boolean => é um valor lógico
// null em js é considerado object

// Quando tempos valor de referência eles se relacionam entre si
//ou seja, qualquer alteração que mudar o valor de uma variavel
//podera alterar a outra, exemplos:

const Array = [1, 2, 3];
const Array2 = Array;
console.log(Array, Array2); // Ambos valores são [1,2,3]

Array2.push(4);
console.log(Array, Array2); // Amobs valores são mudadas para [1, 2, 3, 4]

/* 
  Em teoria o push adicionaria o valor 4 apenas no seguindo Array,
  porem o valor é adicionado em ambos Array's 
*/

//Já com os dados primitivos, os valores não estão relacionados
//sim são copias dos outros, exemplos

let a = 2;
let b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
