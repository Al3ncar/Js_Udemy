let n1 = 2;
let n2 = 3;

console.log(n1 + n2); // 5

// Assim como podem transforma strings em number, tambem podemos transformar
// number em strings; 

// ---- ToString() ---- // 

// Converte um number em string,
// porem dessa maneira o numero em sua origem permanecerá como um number; sendo
// assim apenas nessa expressão o valor será uma string;

console.log(n1.toString() + n2); // 25 = 2 e 5
console.log(typeof n1); // Number;

//para realmente altera o tipo do n1 devemos fazer dessa forma;

n1 = n1.toString();
console.log(typeof n1); // String;

//podemos representar o numero de uma forma Binaria usando o seguinte comando;

let n3 = 1500;
console.log(n3.toString(2)); // assim teremos uma representação de numero binario;

// ---- ToFixed() ---- // 

// Ele limita as casa decimas, sendo retornado apenas a
// contidade determina de casas decimais, pode ocorrer de haver um
// arredondamento;

let n4 = 12.5687879877987987987984616515345454566546;
console.log(n4.toFixed(2)); // 12.57
// Deste modo foi limitado até duas casas; 

// ---- IsInteger() ---- // 

// Ele valida se o number representado é flutuante ou inteiro, sendo assim ele recebe um
// "false" se for flutuante e um "true" se for inteiro ; Ele é filho do Number;

let n5 = 156; // Inteiro ;
let n6 = 156.589666; // Flutuante;

console.log(Number.isInteger(n5)) // inteiro = true
console.log(Number.isInteger(n6)) // flutuante = false

// ---- IsNaN() ---- //
 
// NaN => Not A Number => Não é Um Numero 
// Podemos utilizar o ISNAN para sabermos se os valores são numeros; Ele é filho do Number;

let somaN7 = n1 + "olá sou uma string"

console.log(Number.isNaN(somaN7)) // true
console.log(isNaN("teste")) // true
console.log(isNaN(1422)) // false

//NÃO É BOA PRATICA USAR STRINGS COM NUMBERS