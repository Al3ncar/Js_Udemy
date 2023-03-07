// FOR OF 

//Diferente do For In este pega o valor do indice. Ambos tem a sintaxe semelhante, 
//possuindo uma unica diferença, o " of " no lugar do " in ", desta maneira:

const clothingStore = ['camiseta', 'short', 'blusão', 'tenis'];

for(let value of  clothingStore){
    console.log(value)//
}

//tendo tambem uma lógica diferente, o of PEGA O VALOR DO ARRAY/CHAVES
//não sendo necessario colocar:
// exemplo: console.log( clothingStore[ value ] ), devido o of pegar o valor do indice



console.log(""); // Quebra de linha no console.



//Temos tambem um outra maneira de usar o for

clothingStore.forEach( function (value, index, array){

    console.log(value, index, array);
        // O VALUE é o valor do indice
        // O INDEX é o proprio indice
        // O ARRAY é o array completo 

})


//OS 4 TIPOS DE FOR:

// 1° FOR I -> manipula até chegar no valor do indice
// 2° FOR IN -> já possui o indice
// 3° FOR OF -> já possui o o VALOR do indice
// 4° FOREACH() -> função que pega o valor e o indice