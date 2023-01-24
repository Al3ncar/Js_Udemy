//Operadores Lógicos 


// && -> AND -> E -> Todas as expressões precisam ser verdadeoiras para retornar true

console.log(true && true && true && false  && true) // false

const expresAnd = true && true && true;  
console.log(expres) // TRUE

// Exemplo do &&

const nameUser = "Cake" // form usuario digitou
const passwordUser = 13568534265 // form usuario digitou

//                      true            +        true 
const vaiLogar = nameUser === "Cake" && passwordUser === 13568534265
console.log(vaiLogar) //(true) VAI CONSEGUIR LOGAR 
//                      true            +        false
const vaiLogar2 = nameUser === "Cake" && passwordUser === 1356
console.log(vaiLogar2) //(false) NÂO VAI CONSEGUIR LOGAR




// || -> OR -> OU -> Se umas das condições retornar verdadeira o resultado será verdadeiro

console.log(true || false) // true
const expresOr =  true || false || false || false || false
console.log(expresOr) // true

//                        false         +             true 
const vaiLogar3 = nameUser === "Zilla" || passwordUser === 13568534265
console.log(vaiLogar3) // (true) VAI CONSEGUIR LOGAR 
 


