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