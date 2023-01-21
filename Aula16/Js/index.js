// Eu posso alterar o valor de uma constt com array, o que eu não posso é reatribuir um valor

const array = [1,2,3];
// Maneira de alterar um array
array.push(4);
array[0] = "luiz"
console.log(array) // [ 'luiz', 2, 3, 4 ]

//não posso fazer isso
// array = "outro valor" 
console.log(array) // Assignment to constant variable.


/* -- -- */


// Se o objeto não existisse iriamos ter que criar muitas consts, exemplo:

//SEM USAR OBJECT:
const nome01 = `Amelha`
const sobrenome01 = "Lima"
const idade01 = 19

const nome02 = `Maria`
const sobrenome02 = "Rocha"
const idade02 = 21

const nome03 = `Adalbert`
const sobrenome03 = "Lima"
const idade03 = 96

//USANDO OBJECT: de maneira literal

const pessoa01 = {
    nome: `Amelha`,
    sobrenome: "Lima",
    idade: 19
}
const pessoa02 = {
    nome: `Maria`,
    sobrenome: "Rocha",
    idade: 21,
}
const pessoa03 = {
    nome: `Adalbert`,
    sobrenome: "Pacheco",
    idade: 96,
}
// Para acessar os atributos: "nome, sobrenome, idade" devemos usar o ponto " . " , exemplo:

//acessar o nome:
console.log(pessoa01.nome) // Amelha
console.log(pessoa02.sobrenome) // Rocha
console.log(pessoa03.idade) // 96
//notavelmente usei os dados das 3 pessoas 


/* -- -- */


//Podemos fazer isso com função, USANDO FUNÇÕES 
//Argumento é tudo aquilo que é passa para o parametro, exemplo:

function person(nome, sobrenome, idade){
    return{
        nomes: nome,
        sobrenomes: sobrenome,
        idades: idade,
    }
}

const perfil = person(`Antonio`, `Perreira`, 16) 
// nome = Antonio, sobrenome = Perreita, idade = 16.
const perfil2 = person(`Cléo`, `Alvez`, 18)
// nome = Cléo, sobrenome = Alvez, idade = 18.
const perfil3 = person(`Alfredo`, `Monteiro`, 23)
// nome = Alfredo, sobrenome = Monteiro, idade = 23.


/* -- -- */


// Quando uma função está dentro de um objeto é chamado de método

const people = {
    nome: `Igor`,
    sobrenome: ` Alencar`,
    idade: 18,

    fala(){
        console.log(`Olá eu sou ${this.nome}${this.sobrenome}, eu tenho ${this.idade} de idade`)
    },
    soma(){
        this.idade++
    }
}

people.fala()
people.soma()
people.fala()



const Perfis = [
    {
        nome: "Afred",
        sobrenome:"Jorge",
        idade:18,
    },
    {
        nome: "Afred",
        sobrenome:"Jorge",
        idade:18,
    },
    {
        nome: "Afred",
        sobrenome:"Jorge",
        idade:18,
    },
    {
        nome: "laysa",
        sobrenome:"Gomes",
        idade:18,
    }
]

console.log(Perfis)


const Perfis2 = (nomes, sobrenomes, idades) => {
    return{
        
        nome: nomes,
        sobrenome: sobrenomes,
        idade: idades,
        
    }
}

console.log(Perfis2(`Amelia`, `Rocha`, 96))
