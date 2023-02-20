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
const diaSemana = data.getDay();
let diaSemanaText;

if(diaSemana === 0){
  diaSemanaText = 'Domingo';
}else if(diaSemana === 1){
  diaSemanaText = 'Segunda-Feira';
}else if(diaSemana === 2){
  diaSemanaText = 'Terça-Feira';
}else if(diaSemana === 3){
  diaSemanaText = 'Quarta-Feira';
}else if(diaSemana === 4){
  diaSemanaText = 'Quinta-Feira';
}else if(diaSemana === 5){
  diaSemanaText = 'Sexta-Feira';
}else if(diaSemana === 6){
  diaSemanaText = 'Sabado';
}else if(diaSemana >= 7 || diaSemana <= 0){
  diaSemanaText = 'Data Invalida'
}

console.log(DiaSemana);
console.log(diaSemana, diaSemanaText);

