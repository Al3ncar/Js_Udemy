// Escreva uma função que recebe um numero e retorna o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é divisivel por 3 e 5 = Retorna o próprio número

// Checar se o numero é realmente um numero =  Retorna o PROPRIO VALOR RECEBIDO 
// Use a função com o numero de 0 a 100 

function rNumb (x) {
    if(x % 3 === 0 && x % 5 === 0){ console.log(`FIZZBUZZ`)}else
    if(x % 3 === 0){ console.log(`FIZZ`)}else
    if(x % 5 === 0){ console.log(`BUZZ`)}else
    if(x !== true ){ console.log(`Seu numero é: ${x}`)};
}
for(let i = 0; i <= 10; i++){ console.log(i, rNumb(i)) }


console.log("") // Espaço no console


// # # Codigo da Aula # # //

function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return `FIZZBUZZ`;
    if(numero % 3 === 0) return `FIZZ`;
    if(numero % 5 === 0) return `BUZZ`;
    return numero;
}


console.log('a', fizzBuzz('a'))
for(let i = 0; i <= 10 ; i++){ 
    console.log(i, fizzBuzz(i))
}

console.log("") // Espaço no console



// # # Melhoria no meu codigo # # //

function rNumb2 (x) {
    if(x % 3 === 0 && x % 5 === 0)return `FIZZBUZZ`;
    if(x % 3 === 0)return`FIZZ`;
    if(x % 5 === 0)return `BUZZ`;
    if(x !== true )return `Seu numero é: ${x}`;
}
for(let i = 0; i <= 10; i++){ console.log(i, rNumb2(i)) }
