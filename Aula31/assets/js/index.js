// Estrutura de reptição

console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')

console.log(' ')// Espaço no consele


// O padrão I é de INDEX
for(
    /*Criar um variavel*/ let i = 0; 
    /* criar uma condição */ i <= 5 ; 
    /* incrementar ou decrementar a variavel */ i++
){  console.log(`Linha ${i}`); }


console.log(' ')// Espaço no consele


//podemos pular os valores da forma que quisermos

for( let i = 0; i <= 100; i += 10){//Estamos pulando de 10 em 10
    console.log(`Linha: ${i}`)
}

console.log(' ')// Espaço no consele

//podemos criar um de decremento dessa forma

for(let i = 100; i >= 0; i -= 10){
    console.log(`Linha: ${i}`)
}

console.log(' ')// Espaço no consele

// CONDIÇÃO DE PAR E IMPARES

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? `${i} Par` : `${i} Impar`;
    console.log(par)
}

const frutas = ['Maçã', 'Pêra', 'Uva', ]