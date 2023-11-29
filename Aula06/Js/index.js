var Mynome = "IGOR"; // Declarração da Variavel
var Mynome = "Alencar"; // Redeclaração da Variavel

console.log(Mynome);

//ECMAScript = Padronização da Linguagem JavaScript criada pelo empresa ECMAInternational
//ECMAScript 2015 (ES6) => versão de Padronização

// a variavel "let" foi introduzida na versão ES6 da documentação do ECMAScript

// 2015 (ES6)
// 2016 (ES7)

//Atualemnte podemos declarar uma variavel sem uma palavra reserva: 
// let, var, const.
//exemplo:

names = "Igor";
console.log(names);

// NUNCA FAZER ISSO, desta forma ira criar uma variavel Global
//que possivelmente pode alterar outras variaveis dentro do seu codigo

// criar variaveis com (const), (let), exemplo:

let texto = 'Usando melhor as variaveis'
const texto2 = 'Usando melhor as variaveis constantes'

console.log(texto);
console.log(texto2);

// O js possibilita nós usarmos (var), porem não e performatico mante-lo no codigo
// deve ser substituido por (const) ou (let)