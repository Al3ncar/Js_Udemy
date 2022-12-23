// ---- Math ---- //

//Mathé um objeto integrado que possui propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.

// floor ==> arredonda para baixo

let n1 = 9.54578
let resultN1 = Math.floor(n1)
console.log(resultN1) // 9

//ceil ==> arredonda para cima

let n2 = 9.54578
let resultN2 = Math.ceil(n1)
console.log(resultN2) // 10


//round ==> arredonda automaticamente,
//0.49 = arredonda para baixo
//0.50 = arredonda para cima 

let n3 = 9.54578
let resultN3 = Math.round(n3)
console.log(resultN3)

//max ==> ele vai buscar o maior valor de um determinada array ou sequencia

let n4 = 12
let n5 = 70
console.log(Math.max(1, -2, 3, 6, 45, -56, 9, -5, 17, n4 + n5 ))

//min ==> ele vai buscar o menor valor de um determinada array ou sequencia 
console.log(Math.min(1, -2, 3, 6, 45, -56, 9, -5, 17, n4 + n5 ))

//random ==> ele adiciona numeros aleatorios de 0.000000 até 0.99999
console.log(Math.random())

//pi ==> Adiciona o numero de pi
console.log(Math.PI)

//pow ==> são os numeros potenciais 
let n6  = 9
console.log(Math.pow(2, 10)) // 1024
console.log(2 ** 10 ) // Outra maneira

// Outras maneiras usando um valor guardado
console.log(n6 ** (1/2)) // Outra menira
console.log(n6 ** 0.5) // Outra maneira

//em JavaScript podemos dividir as coisas por 0
console.log(100 / 0) // Infinity
console.log(100 / 0.0000000000001) // 100000000000000000000

//Método é tudo aquela função que está em um objeto