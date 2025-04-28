// //Mais diferenças entre Let e Const:

// //Uma Let não pode ser redeclarada, exemplo:
// let nome = "Ighor";
// var nome2 = "Ighor";

// // let nome = ' Alencar'; // Caso esse codigo retorne ele ira

// // -----   ----- //

// const verdadeiro = true;

// // let nome2 = "Igor";
// var nome3 = "Alencar";

// if (verdadeiro) {
//   console.log(nome2, nome3);
// }
// //Deste modo será retornado Igor Alencar;

// //Agora irei fazer o mesmo codigo com uma alteração diferente

// const verdadeiro2 = true;

// let nome4 = "Igor";
// var nome5 = "Alencar";

// if (verdadeiro) {
//   let nome4 = "IGOOOROOOOOO";
//   console.log(nome4, nome5);
// }

// // Agora será retornado no console:
// //  IGOOOR Alencar

// // -----   ----- //

// //Let tem escopo de BLOCO { ... BLOCO }
// //Tudo que tiver dentro de chaves é um bloco

// {
//   let nome3 = "IGOOOROOOOOO";
//   console.log(nome3, nome4);
// }

// //Quando VAR só tem escopo de função.

// // BLOCO ESCOPO
// let nome4 = "Coisa"; // CRIANDO VARIAVEL
// const verdadeiro3 = true;

// if (verdadeiro3) {
//   // BLOCO ESCOPO
//   let nome = "coisadoidamesmo"; // CRIANDO VARIAVEL
//   console.log(nome);

//   //Podemos criar blocos aninhados, desta maneira

//   if (verdadeiro3) {
//     // BLOCO ESCOPO
//     console.log("OK");
//   }
// }
// // o CONSOLE irá retornar as coisas num quesito de BLOCOS

// // Escop de function
// //podemos usar uma const global e usa-la fora do bloco, exemplo:

// const exemplo = "Olá Eu sou iGOR";

// function falaOi() {
//   console.log(exemplo); // Olá Eu sou iGOR
// }
// falaOi();

// //Caso fosse assim:

// function falaOi(exemplo2) {
//   const exemplo2 = "Olá Eu sou iGOR";
// }

// console.log(exemplo2); // Erro
// falaOi();

// //iria retornar um erro

// // -----   ----- //

// //Elevação ( Hoisting ), eleva a declaração das variaveis; exemplo:

// console.log(sobrenome);

// var sobrenome = "Olá como vai??";

// //Aprincipios era para que o codigo retonase erro, porem devido a elevação isso não irá acontece
// //é retornado undefined.

const pessoas = {
  nome: "Gabriela",
  sobrenome: "Ferreira",
  idade: 26,
  endereco: {
    rua: "Av. Brasil",
    numero: 321,
  },
};

const { nome } = pessoas;
const { sobrenome } = pessoas;
const { endereco } = pessoas;

console.log(nome);
console.log(sobrenome);
console.log(endereco);

const jogos = {
  nome: "GRA",
  ano: 2021,
};

// const carro = {
//   nome: "toyota",
//   ano: 1950,
//   mostraNome() {
//     console.log(this.nome);
//   },
//   trocarAno(ano) {
//     this.ano = ano;
//   },
// };

// // carro.mostraNome();
// // carro.mostraNome.call(jogos);

// const newObj = carro.mostraNome.bind(jogos);
// newObj();

// console.log(jogos.ano);

// const pessoa = {
//   nome: 'João',
//   falar: function() {
//     console.log(`Meu nome é ${this.nome}`)
//   }
// }

// const p1 = {
//   nome: 'Adalberto'
// }

// const adal = pessoa.falar.bind(p1)
// adal()
// pessoa.falar()
// // const falarJoao = pessoa.falar.bind(pessoa)
// // falarJoao() // "Meu nome é João"

const pessoa = {
  nome: "Carla",
  jogos: ["GTA", "FIFA", "Mario"],

  mostrarJogo() {
    this.jogos.forEach(function (item) {
      console.log(this.nome, item);
    }, this);
  },
};

pessoa.mostrarJogo();
