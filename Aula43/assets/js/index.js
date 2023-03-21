// Escreva uma função que recebe um numero e retorna o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é divisivel por 3 e 5 = Retorna o próprio número

// Checar se o numero é realmente um numero =  Retorna o PROPRIO VALOR RECEBIDO 
// Use a função com o numero de 0 a 100 

function rNumb (x) {
    if(x !== true ){ console.log(`Seu numero é: ${x}`)};
    if(x % 3 === 0 && x % 5 === 0){ console.log(`FIZZBUZZ`)}else
    if(x % 3 === 0){ console.log(`FIZZ`)}else
    if(x % 5 === 0){ console.log(`BUZZ`)}
}

for(let i = 0; i <= 30; i++){ console.log(i), rNumb(i) }
