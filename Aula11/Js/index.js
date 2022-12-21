// As strings são indexadas e cada caracter tem um indice começando de 0

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

// ---- CharAt() ---- //

//Podemos usar tambem um método chamado de charAt()
// Esse método charAt() retorna o caractere especificado a partir de uma string.
console.log(umString.charAt(4)) // e

// ---- Concat() ---- //

// Temos tambem maneiras de Concatenar strings usando o método chamado de
// concat
console.log(umString.concat(`, estou concatenando mais um texto`)) //

// ---- IndexOf() ---- //

//podemos saber em qual indice começa a palavra "texto"
// Posso pedir pra ele começar no indece 3, colocando um numero logo após o
// texto indexOf(`palavra a ser buscada`, indice que deve começar)

console.log(umString.indexOf(`texto`)) // 3
console.log(umString.indexOf(`to`, 3)) // 6 -> 6, 
// lastIndexOf() retorna o índice da última ocorrência do valor especificado
// encontrado na String. 

// ---- Match() ---- //

//O método match() retorna uma correspondência entre uma string com uma expressão regular.
//Esse método é uma verificação de uma string 

let palavra = "Qu4lqu3r t/p0 d& c@r@cte[ 1682 "
console.log(palavra.match(/[43@#/[]/g))

//.match(/[o que vai ser verificado na string]/ g = global)
//Podemos ver se tem letras do A ao Z 

let texto2 = "Qu4lqu3r t/p0 d& c@r@cte[ "
console.log(palavra.match(/[a-z]/g)) // minúsculas
console.log(palavra.match(/[A-Z]/g)) // MAIÚSCULAS
console.log(palavra.match(/[0-9]/g)) // Apenas numeros 

// ---- Search() ---- //

//Retorna o indice onde começa a verificação

let texto3 = "Um texto apenas"
console.log(texto3.search(/[a-z]/g))

// ---- Reaplace() ---- //

//Altera uma determinada string por outro elemento

let texto4 = "Um texto apenas, Um coisa muito importante ter mais de Um text"

console.log(texto4.replace("Um" , "Outro"))
console.log(texto4.replace(/Um/g , "Outro")) // Dessa maneira eu consigo alterar todos os "Um"

// ---- Length() ---- //

//Ele conta quantos caracter tem em uma string 

let texto5 = "Coisas devem serem feitas"
console.log(texto5.length) // 25

// ---- Slice() ---- //

//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original.

let texto6 = "Coisas seram feitas"
console.log(texto6.slice(7, 19)) // seram feitas

// ---- Split ---- //

//Divide a string em algum caracter especifico. Ele irá criar um Array com as palavras dividas.

console.log(texto4.split(" ")) /* exemplo:
[
  'Um', 'texto', 'apenas,', 'Um', 'coisa', 'muito','importante', 'ter', 'mais','de', 'Um','text'
]
*/

// ---- ToUpperCase() ---- //

//Ele altera todas as string para Maiúscula 

let texto7 = "Esse é mais um exemplo de texto usado"
console.log(texto7.toUpperCase()) // MAIÚSCULAS
console.log(texto7.toLowerCase()) // minúsculas

/* 
const yourName = prompt("Qual é seu nome??")
const Tela = window.document.write(yourName) 
*/

//Tem um caminho no js que mostra o que esta no meu  HTML, o caminho é esse

console.log(window.document.body.innerHTML) 

// Desafio da Aula 11

const yourName = prompt("Qual é seu nome??")

let length = yourName.length;
let second = yourName.charAt(2);
let firstIndex = yourName.indexOf("A");
let last = yourName.lastIndexOf("r");
let upCase = yourName.toUpperCase()
let lowCase = yourName.toLowerCase()


window.document.body.innerHTML = `Seu nome é: ${yourName}`
window.document.body.innerHTML = `Seu nome tem ${length} letras`
window.document.body.innerHTML = `A segunda letra do seu nome é: ${second}`
window.document.body.innerHTML = `Qual o primeiro índice da letra A no seu nome ${firstIndex}`
window.document.body.innerHTML = `Qual o último índice da letra r no seu nome ${last}`
window.document.body.innerHTML = `As últimas 3 letras do seu nome são: ${}`
window.document.body.innerHTML = `As palavras do seu nome são:  ${}`
window.document.body.innerHTML = `Seu nome com letras maiúsculas: ${upCase}`
window.document.body.innerHTML = `Seu nome com letras minúsculas: ${lowCase}`