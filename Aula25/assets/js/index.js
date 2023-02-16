// Objeto Date
// Ela é uma função construtora

const data = new Date(0);//  01/01/1970 Timestamp unix ou época unix 
console.log(data.toString());

// devido os horarios, notamos que ira retornar 31/12/1969 devido estarmos 3 horas atrasados

//Para termos o inicio do timestamp unix, devemos construir um codigo cujo está 3 horas afrente

const treshoras = 60 * 60 * 3 * 1000; 
const umDia = 60 * 60 * 24 * 1000;
const data2 = new Date(0 + treshoras); // 01 / 01 / 1970 Timestamp unix = ou época unix
console.log(data2.toString());

const data3 = new Date(2019, 4, 20, 20, 20, 59, 999);
// construção logica  (ANO, MES, DIA, HORAS, MINUTOS, SEGUNDO, MILISEGUNDOS)

//forma mais acessivel de construir uma data
const data4 = new Date('2023-02-15T20:39:59.999');
console.log(data4.toString());

//Lista para pegar cada elemento de data

const data5 = new Date();

console.log('Dia', data5.getDate()); // Para obter o NUMERO DO DIA ;
console.log('Mês', data5.getMonth() + 1); // Para obter o MES + 1 = MES ATUAL;
console.log('Ano', data5.getFullYear()); // Para obter o ANO;
console.log('Hora', data5.getHours()); // Para obter o HORAS;
console.log('Min', data5.getMinutes()); // Para obter o MINUTOS;
console.log('Seg', data5.getSeconds()); // Para obter o SEGUNDOS;
console.log('ms', data5.getMilliseconds()); // Para obter o MILISEGUNDOS;
console.log('Dia da Semana', data5.getDay() + 1); // Para obter o NUMERO D0 DIA NA SEMANA. NÃO NO MẼS.
console.log(data5.toString());

// quando usamos o getMonth a representação dos meses começam do ZERO
// para obter uma valor expecifico devemos usar o (+1), dessa forma teremos o mes desejado

//janeiro = 0
//fevereiro  = 1
//março  = 2
//abril  = 3
//maio  = 4
//junho  = 5
//julho  = 6
//agosto  = 7
//setembro  = 8
//outubro  = 9
//novembro  = 10
//dezembro = 11

//sintaxe:
console.log('Mês', data5.getMonth() + 1) ;


//  Quando usamos o getDay temos o dia da semana, e para obter uma valor expecifico devemos usar o (+1);

// 0 - DOMINGO
// 1 - SEGUNDA - FEIRA
// 2 - TERÇA - FEIRA
// 3 - QUARTA - FEIRA
// 4 - QUINTA - FEIRA
// 5 - SEXTA - FEIRA
// 6 - SABADO

//sintaxe:
console.log('Dia da Semana', data5.getDay() + 1) ;

//podemos ter os milesimos de segundos com o Date now, exemplo:
console.log(Date.now()); // pegando os milisegundos atuais

const data6 = new Date(1676510700004); // colocando os milisegundos atravez dos milisegundos
console.log(data6.toString()); // Transformando em texto 

// FUNÇÃO QUE RETORNA A DATA

function Escop(){
    function zeroAEsquerda(num){return num >= 10 ? num : `0${num}`};

    function formatDate(dataFormt){

        const Mês = zeroAEsquerda(dataFormt.getMonth() + 1);
        const Dia = zeroAEsquerda(dataFormt.getDate());
        const Ano = zeroAEsquerda(dataFormt.getFullYear());
        const hora = zeroAEsquerda(dataFormt.getHours());
        const Min = zeroAEsquerda(dataFormt.getMinutes());
        const Seg = zeroAEsquerda(dataFormt.getSeconds());
        
        return `Data: ${Dia} / ${Mês} / ${Ano}  Horas: ${hora}:${Min}:${Seg} `
    };

    const dataFormt = new Date();
    const dataBrasil = formatDate(dataFormt);

    console.log(dataBrasil)
} Escop();


function Escop(){
    function zeroAEsquerda(num){return num >= 10 ? num : `0${num}`};
    function dataAtual(newDate){

        const Mês = zeroAEsquerda(newDate.getMonth() + 1);
        const Dia = zeroAEsquerda(newDate.getDate());
        const Ano = zeroAEsquerda(newDate.getFullYear());
        const hora = zeroAEsquerda(newDate.getHours());
        const Min = zeroAEsquerda(newDate.getMinutes());
        const Seg = zeroAEsquerda(newDate.getSeconds());
        
        return `Data: ${Dia} / ${Mês} / ${Ano}  Horas: ${hora}:${Min}:${Seg} `
    }

    const newDate = new Date();
    const returnFunc = dataAtual(newDate)
    console.log(returnFunc)

}Escop();
