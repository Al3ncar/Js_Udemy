// Objeto Date
// Ela é uma função construtora

const data = new Date(0)//  01/01/1970 Timestamp unix ou época unix 
console.log(data.toString()) 
// devido os horarios, notamos que ira retornar 31/12/1969 devido estarmos 3 horas atrasados

//Para termos o inicio do timestamp unix, devemos construir um codigo cujo está 3 horas afrente

const treshoras = 60 * 60 * 3 * 1000; 
const umDia = 60 * 60 * 24 * 1000;
const data2 = new Date(0 + treshoras) // 01 / 01 / 1970 Timestamp unix = ou época unix
console.log(data2.toString()) 



const data3 = new Date(2019, 4, 20, 20, 20, 59, 999)
// construção logica  (ANO, MES, DIA, HORAS, MINUTOS, SEGUNDO, MILISEGUNDOS)