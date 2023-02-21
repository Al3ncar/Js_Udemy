/* // Estrutura condicionais SWITCH

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

// Agora iremos construir uma condição no qual  está retornando uma estrutura de semanas 

const data = new Date(); // pegando a data atual 
const DiaSemana = data.getDate(); // Pegando a DATA DO MES
const diaSemana = data.getDay(); // Pegando a DATA NA SEMANA
let diaSemanaText; // Let que vai retornar o dia da semana

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

console.log(DiaSemana, diaSemanaText);

// Agora iremosd comntruir uma função no qual usaremos o SWITCH()
//Sendo u7ma forma melhor de contruir uma condição de reptição

switch(diaSemana){
  case 0: diaSemanaText = 'Domingo';
    break;
  case 1: diaSemanaText = 'Segunda-Feira';
    break;
  case 2: diaSemanaText = 'Terça-Feira';
      break;
  case 3: diaSemanaText = 'Quarta-Feira';
    break;
  case 4: diaSemanaText = 'Quinta-Feira';
    break;
  case 5: diaSemanaText = 'Sexta-Feira';
    break;
  case 6: diaSemanaText = 'Sabado';
    break;
  default: diaSemanaText = '';
    break;
}

switch(/* o que vai ser validado */ diaSemana){
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  case 0/* Aprimeira condição 0 */:/* o que vai ser retornado */ diaSemanaText = 'Domingo';
    /* O final da ação */ break;
  default/* caso nenhuma das condições for verdadeira  */: /* resposta final será essa */   diaSemanaText = '';
    /* O final da ação */ break;
}
 