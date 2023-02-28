// Desestruturação com chaves

//Maneira Tradicional  

const pessoas = {
    nome: 'Igor',
    sobrenome:'Miranda',
    idade:30,
    endereço:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};
const names = pessoas.nome
console.log(names)

//Maneira desestruturada

const pessoas2 = {
    nome: 'Igor',
    sobrenome:'Miranda',
    idade:30,
    endereço:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};
const { nome } = pessoas2;
console.log(nome);