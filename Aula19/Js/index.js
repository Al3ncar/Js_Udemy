//Operadores Lógicos 


// && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true


console.log(true && true && true && false  && true) // false

const expresAnd = true && true && true;  
console.log(expresAnd) // TRUE

// Exemplo do &&

const nameUser = "Cake" // form usuario digitou
const passwordUser = 13568534265 // form usuario digitou

//                      true            +        true 
const vaiLogar = nameUser === "Cake" && passwordUser === 13568534265
console.log(vaiLogar) //(true) VAI CONSEGUIR LOGAR 
//                      true            +        false
const vaiLogar2 = nameUser === "Cake" && passwordUser === 1356
console.log(vaiLogar2) //(false) NÂO VAI CONSEGUIR LOGAR// 


// && -> false && true -> false "O valor mesmo"
// Quando temos todos os valores verdadeiros ele ira retornar o ultimo valor, exemplo:

console.log(`Kaio Sousa` && true && `Julia`) // Julia

//em JS tudo poder ser avaliado ou em VERDADEIRO(TRUE) ou em FALSO(FALSE)

// Exemplo de valorez FALSY VALUES:

    // 1° false -> falso literal
        console.log("Olá" && false && "Tudo bem ??")// false

    // 2° 0 -> sem valorconsole.log
        console.log("Olá" && 0 && "Tudo bem ??")// 0

    // 3° '', "", `` -> strings vazias
        console.log("Olá" && '' && "Tudo bem ??")// ''
        console.log("Olá" && "" && "Tudo bem ??")// ""
        console.log("Olá" && `` && "Tudo bem ??")// ``

    // 4° null / undefined -> Vazio / Não definido 
        console.log("Olá" && null && "Tudo bem ??")// null
        console.log("Olá" && undefined && "Tudo bem ??")// undefined

    // 5° NAN -> Not A Number
        console.log("Olá" && NaN && "Tudo bem ??") // NAN

// Todos os valores que não estão aqui são considerados VERDADEIRO(TRUE)


const  FalaOi = () => {
    return `Olá, Como você está??`;
}
const vaiRodar = true;

vaiRodar && console.log(FalaOi());



// ----  ---- //



// || -> OR -> OU -> Se umas das condições retornar verdadeira o resultado será verdadeiro

console.log(true || false) // true
const expresOr =  true || false || false || false || false
console.log(expresOr) // true

//                        false         +             true 
const vaiLogar3 = nameUser === "Zilla" || passwordUser === 13568534265
console.log(vaiLogar3) // (true) VAI CONSEGUIR LOGAR 
 
// ! -> NOT -> NÃO
// A EXCLAMAÇÃO serve para inverter os valores de uma expressão

console.log(!true) //false
console.log(!false) // true

// Podemos até retornar o valor inicial, porem não é ideal fazer isso.

console.log(!!true) // true
console.log(!!false) // false


