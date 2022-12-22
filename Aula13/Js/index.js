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

//Método é tudo aquela função que está em um objeto