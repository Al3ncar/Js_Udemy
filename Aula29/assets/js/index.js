//Atribuição via desestruturação

let a = 'A'
let b = 'B'
let c = 'C'

const letrasSequencia = [b, c, a];
[a, b, c] = letrasSequencia;

console.log(a, b, c)

// Outro exemplo de desestruturação de codigo

//Maneira normal

let a2 = 'AA'
let b2 = 'AA'
let c2 = 'AA'

console.log(a2);
console.log(b2);
console.log(c2);

//Maneira desestruturada

let [a3, b3, c3] = ['AA', 'BB', 'CC'];

console.log(a3);
console.log(b3);
console.log(c3);

//Outro exemplos de desestruturação

//Maneira normal

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000 ];

const primeiroNum = numeros[0];
const segundoNum = numeros[1];
const terceiroNum = numeros[2];
const quartoNum = numeros[3];
const quintoNum = numeros[4];
const sextoNum = numeros[5];
const setimoNum = numeros[6];
const oitavoNum = numeros[7];
const nonoNum = numeros[8];

console.log(primeiroNum);
console.log(segundoNum);
console.log(terceiroNum);
console.log(quartoNum);
console.log(quintoNum);
console.log(sextoNum);
console.log(setimoNum);
console.log(oitavoNum);
console.log(nonoNum);

//Maneira desestruturada
 
const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000 ];
const [primNum, segundNum, ...rest] = numeros2

console.log(primNum, segundNum);
console.log(rest)

//O operados ...

//os 3 PONTOS pode ter lógicas diferente, sendo ele:
//... rest => PEGAR O RESTO
//... apread => ESPALHAR
