//Funções executam ações, funções recebem e atualizam valores

function saudacao(nome){ // corpo da função
    console.log(`Bom dia ${nome}`)
}

saudacao("Dodio") // Podemos passar valores para serem ultilizados na string

saudacao("Otavio")
saudacao("Mateus")
saudacao("Murilo")

const variavel = saudacao("Pedro")
console.log(variavel)