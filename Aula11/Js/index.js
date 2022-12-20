// As strings são indexadas e cada caracter tem um indice
//começando de 0 

const umString = `Um texto` // 01234567 = "Um Texto"
console.log(umString)
/*

//Posso escolher qual caracter quero que apareça
 const umString = 
`
 U = 0
 m = 1
   = 2
 t = 3
 e = 4
 x = 5
 t = 6
 o = 7
` 
*/

console.log(umString[4]) // e

//Podemos usar tambem um método chamado de charAt()
console.log(umString.charAt(4)) // e

//Esse método charAt() retorna o caractere especificado a partir de uma string.

//Temos tambem maneiras de Concatenar strings usando o método chamado de concat

console.log(umString.concat(`, estou concatenando mais um texto`)) // 

//podemos saber em qual indice começa a palavra "texto"

console.log(umString.indexOf(`texto`)) // 3
console.log(umString.indexOf(`to`, 3)) // 6 -> 6, 7

//Posso pedir pra ele começar no indece 3, colocando um numero logo após o texto