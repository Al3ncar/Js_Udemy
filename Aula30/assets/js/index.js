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
    sobrenome:'Alencar',
    idade:30,
    endereco:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};
//podemos colocar valores padrão como

const pessoas3 = {
    nome: 'Igor',
    sobrenome:'Alencar',
    idade:30,
    endereco:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};
//      valor padrão
const { nome = '', sobrenome, idade} = pessoas3;
console.log(nome, sobrenome, idade);

//Podemos alterar o nome usando chave

const pessoas4 = {
    nome: 'Igor',
    sobrenome:'Alencar',
    idade:30,
    endereco:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};

const { nome: teste /* deste modo troquei a palavra NOME por TESTE */, sobrenomes, idades} = pessoas4;
console.log(teste, sobrenomes, idades ) 

//Para pegar o valor do endereco decemos desenvolver os seguinte codigo:

const pessoas5 = {
    nome: 'Igor',
    sobrenome:'Alencar',
    idade:30,
    endereco:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};

const { endereco: { rua, numero } } = pessoas5;
console.log(rua, numero);

const pessoas6 = {
    nomes: 'Igor',
    sobrenome:'Alencar',
    idade:30,
    endereco:{
        rua: 'Av Sâo Miguel',
        numero: 123
    }
};
const { nomes, ...resto} = pessoas6;
console.log(nome, resto);