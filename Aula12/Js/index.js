 let n1 = 2
 let n2 = 3

 console.log(n1 + n2) // 5

 //Assim como podem transforma strings em number, tambem podemos transformar number em strings

 // ---- ToString() ---- // 

// Converte um number em string, porem dessa maneira o numero em sua origem permanecerá como um number. 
//sendo assim apenas nessa expressão o valor será uma string

console.log(n1.toString() + n2) // 25 = 2 e 5
console.log(typeof n1) // Number

//para realmente altera o tipo do n1 devemos fazer dessa forma

n1 = n1.toString()
console.log(typeof n1) // String

//podemos representar o numero de uma forma Binaria usando o seguinte comando

let n3 = 1500
console.log(n3.toString(2)) // assim teremos uma representação de numero binario

// ---- ToFixed() ---- //

//Ele limita as casa decimas, sendo retornado apenas a contidade determina de casas decimais, pode ocorrer de haver um arredondamento

let n4 = 12.5687879877987987987984616515345454566546
console.log(n4.toFixed(2)) // 12.57

//Deste modo foi limitado até duas casas
