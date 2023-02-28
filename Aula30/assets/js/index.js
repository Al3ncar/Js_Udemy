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

//      valor padrão
const { nome = '', sobrenome, idade} = pessoas2;
console.log(nome, sobrenome, idade);

//Podemos alterar o nome usando chave

const { nome: teste /* deste modo troquei a palavra NOME por TESTE */, sobrenomes, idades} = pessoas2;
console.log(teste, sobrenomes, idades ) 

//Para pegar o valor do endereco decemos desenvolver os seguinte codigo:

const { endereco: { rua, numero } } = pessoas2;
console.log(rua, numero);