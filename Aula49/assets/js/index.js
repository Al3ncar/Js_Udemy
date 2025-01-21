// Declaração de função (Function Hoisting)
// A engine do JS sempre irá elevar as declarações
// de funções e variaveis declaradas pro topo do arquivo
// logo eu posso chamar a funçao mesmo antes dela ser criada

FalaOi(); // chamando a função

function FalaOi() {
  // construção de função
  console.log("oiii");
}

console.log(" "); // Espaço no console
// As função são First Class Object ( Objetos de Primeira classe )
// As funções podem ser tratadas como dados, criar uma função como um dado
// e chamado de Function Express, exemplo:

const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

console.log(" "); // Espaço no console

// Isso é bom por eu poder jogar um dado como um paremetro de outra função
// exemplo:

const souUmDado2 = function () {
  console.log("Sou outro dado");
};

function executaFunção(funcao) {
  console.log("Vou executar a função abaixo:👇");
  funcao();
}

executaFunção(souUmDado2);

console.log(" "); // Espaço no console

// Arrow Function ES6+

const funcaoArrow = () => {
  console.log("Sou uma Função Arro");
};

// Isso pode ser considerado como uma expression function, porem ha um problema quando for usar o "this"