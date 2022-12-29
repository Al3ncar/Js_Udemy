// Quando falamos dos tipos de dados estamos falando do valor do valor.

/*   

Primitivos (Imutaveis)- string, number, boolean, null (bigint, symbol)
Referencia (Mutavel) - array, object, function
*/
//Dados primitivos são valores imutaveis     

//Quando usamos dados primitivos estamos fazendo uma copia do dado, exemplo:

let a = `A`;
let b = a; //  Copia de A 

console.log(a, b) // A A 

a = "Outra coisa"
console.log(a, b) // deste modo não afeto o valor de B
// Sempre que uma variavel for igual outra variavel com dados primitivos

