//Funções executam ações, funções recebem e atualizam valores

function saudacao(nome /* parametros */){ // corpo da função
    console.log(`Bom dia ${nome}`)
}
// Podemos passar valores para serem ultilizados na string que está na funçao 
saudacao("Dodio") 
saudacao("Otavio")
saudacao("Mateus")
saudacao("Murilo")

const variavel = saudacao("Pedro")



//para que a função retorne algo devemos usar o return, exemplo:

function test (names){
    console.log(`Olá, como voce está ${names}`)
    return(
        `Me chamo cleidion`
    )
}

test(`Anthony`)

const people = test(`Maria`)
console.log(people)



//porem não é ideal fazer isso, não devemos usar uma funçao que retorna algo diferente com o que está sendo alterado

function comunic(number){
    return `Seu number é ${number}`;
}

const Numeros = comunic(25)
console.log(Numeros) 



//Agora vamos retornar variaveis dentro da função

function soma(x, y){
    const result = x + y
    return result;
}

console.log(soma(2, 2))
console.log(soma(23, 7))
console.log(soma(9, 12))



//Variaveis que estão dentro da função são diferentes da de fora

function exemplo (x, y){
    const exemSoma = x + y // VARIAVEL LOCAL
    // Quando você declara uma variável dentro de uma função, é chamada de variável local, pois ela está disponível somente dentro dessa função.
    return exemSoma
}

const exemSoma = exemplo(5, 8) // VARIAVEL GLOBAL
// Quando você declara uma váriavel fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. 
console.log(exemSoma)



// Quando usamos o return as LINGUAGEM DE PROGRAMAÇÃO NÃO INTERPRETAM OUTRAS FUNÇÕES QUE ESTÃO ABAIXO, exemplo:

function exemplo1 (x, y ){
    const result =  x + y
    return result
    console.log(result(2, 2)) // não irá renderizar nada no console.log
    console.log("NÃAAAAOOO ESTOOU SEEEENDO REEENNDERRIZADO")
}



// Podemos criar funções dentro de variaveis, exemplo:

const Raiz = function(n){
    return n ** 0.5
}

console.log(Raiz(25))
console.log(Raiz(9))
console.log(Raiz(16))
//Deste modo não precisamos colocar um nome na função 