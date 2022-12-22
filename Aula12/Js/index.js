//As contas em Js seguem o padrão IEEE 754-2008 

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

//O Js segue uma determinada inprecisão em suas contas

let n7 = 0.7
let n8 = 0.1
// Matematicamente era para dar 0.8

console.log(n7 + n8) // 0.79999999999999999

n7 += n8 // n7 = n7 + n8 //0.7999999999999
n7 += n8 //0.8999999999999
n7 += n8 //0.9999999999999

console.log(n7)

n7 = n7.toFixed(2) 
console.log(n7) // 1.00
//n7 ainda não irá ser um numero inteiro

console.log(Number.isInteger(n7)) // false
console.log(Number.isInteger(1.00)) // true 
// quando o valor é literal ele retorna verdadeiro 

//para realmente deixarmos ele inteiro devemos usar o Number, junto com o toFixed

let n9 = 0.7;
let n10 = 0.1;

n9 += n10; // 0.799999999999 
n9 += n10; // 0.899999999999 
n9 += n10; // 0.999999999999 

n9 = Number(n9.toFixed(2)); // 1.00 

console.log(n9)
console.log(Number.isInteger(n9));

// Outra maneira

let n11 = 0.7;
let n12 = 0.1;

n11 = (((n11 * 100) + (n12 * 100)) / 100) // 0.8
n11 = (((n11 * 100) + (n12 * 100)) / 100) // 0.9
n11 = (((n11 * 100) + (n12 * 100)) / 100) // 1

console.log(n11)
console.log(Number.isInteger(n11));
