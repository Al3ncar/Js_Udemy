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

//forma mais acessivel de construir uma data
const data4 = new Date('2023-02-15T20:39:59.999');
console.log(data4.toString())

//Lista para pegar cada elemento de data

const data5 = new Date();

console.log('Dia', data5.getDate())
console.log('Mês', data5.getMonth())
console.log('Ano', data5.getFullYear())
console.log('Hora', data5.getHours())
console.log('Min', data5.getMinutes())
console.log('Seg', data5.getSeconds())
console.log('ms', data5.getMilliseconds())
console.log('D.Sem', data5.getDay())()
console.log(data5.toString())