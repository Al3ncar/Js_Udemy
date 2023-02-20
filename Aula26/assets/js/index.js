// Estrutura condicionais SWITCH

//A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.
//sintaxe: 

/* 
//LEGENDA

//Uma expressão que será comparada á cada cláusula case.
//Uma cláusula case que será comparada á expressão.


switch (expressão) {

    case valor1:
      //Instruções executadas quando o resultado da expressão for igual á valor1
      [break;]
    case valor2:
      //Instruções executadas quando o resultado da expressão for igual á valor2
      [break;]
    ...
    case valueN:
      //Instruções executadas quando o resultado da expressão for igual á valorN
      [break;]
    default:
      //Instruções executadas quando o valor da expressão é diferente de todos os cases
      [break;]
  } 
*/ 

const data = new Date();
const DiaSemana = data.getDate();
const diasemana = data.getDay();

if(diaseman === 0){
  diasemana = 'Domingo';
}else if(diaseman === 1){
  diasemana = 'Segunda-Feira';
}else if(diaseman === 2){
  diasemana = 'Terça-Feira';
}else if(diaseman === 3){
  diasemana = 'Quarta-Feira';
}else if(diaseman ===4){
  diasemana = 'Quinta-Feira';
}else if(diaseman === 5){
  diasemana = 'Sexta-Feira';
}else if(diaseman === 6){
  diasemana = 'Sabado';
}

console.log(DiaSemana);
console.log(diasemana);

