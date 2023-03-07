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