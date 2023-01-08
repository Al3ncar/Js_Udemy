console.log("João nasceu em 1984");
console.log("Em 2000 João conheceu Mari.");
console.log("João casou-se com Maria em 2012");
console.log("Maria teve 1 filho com João em 2015");
console.log("o filho de joão se chama Eduardo");

//Variais

/* 
 //let --> Variavel  que pode ser modifica
 //var --> Variavel global que não pode ser alterada 
*/

//Anatomia da Varial

let names = "Henrique"; //String
//Variavel NomedaVarialvel = "ValordaVariavel"

console.log(names, "nasceu em 1984");
console.log("Em 2000", names, "conheceu Mari.");
console.log(names, "casou-se com Maria em 2012");
console.log("Maria teve 1 filha com", names, "em 2015");
console.log("a filha de", names, "se chama Zury");

//Posso iniciar uma varial sem receber um valor

let Variavel; //Declarou uma variavel Vazia
console.log(Variavel); //underfined

Variavel = "Qualquer Valor"; //Declarando uma variavel com o valor "Qualquer Valor"
console.log(Variavel); //Qualquer Valor

Variavel = "Alguma Coisa"; // Consigo mudar o valor dessa variavel dessa forma
console.log(Variavel); //Qualquer Valor

//Não podemos criar variaveis com palavras reservadas
// exemplos:
//  let let = false;
//  let if  = true;

//Variaveis precisam ter nomes explicativos
//Forma INCORRETA
let n = "Ayla";
console.log(n);
//Forma CORRETA~
let nomeCliente = "Ayla";
console.log(nomeCliente);

//Não pode começar uma nome de uma variavel com numero
//let 1nome;  //Erro
// Porem pode começar uma variavel com numero no meio ou no fim
//let no1me:  //Certo~
