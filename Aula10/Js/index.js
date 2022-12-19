// Desafio da Aula 10 As variasveis devem cada uma receber o valor da variavel
// que esta em baixo

let varA = "A" // B
let varB = "B" // C
let varC = "C" // A

const A = varA
const B = varB
const C = varC

varA = B
varB = C
varC = A

console.log(varA, varB, varC)

// Maneira feita em aula

let varA2 = "A" // B
let varB2 = "B" // C
let varC2 = "C" // A

const varATemp = varA2

varA2 = varB2
varB2 = varC2
varC2 = varATemp

console.log(varA2, varB2, varC2)

//Maneira Avançada

let varA3 = "A"; // B
let varB3 = "B"; // C
let varC3 = "C"; // A

[varA3, varB3, varC3] = [varB3, varC3, varA3];

console.log(varA3, varB3, varC3);
