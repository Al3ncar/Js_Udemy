function Escop(){
  const data = document.querySelector('.data');
  
  const day = new Date();

  const numDay = day.getDay();
  const dayNew = day.getDate();
  const monthNew = day.getMonth();
  const yearNew = day.getFullYear();
  const hoursNew = day.getHours();
  const minutesNew = day.getMinutes();
console.log()
  function getDayWeekText(numDay){
    let data;
    switch(numDay){

      case 0: data = 'Domingo';
        return data

      case 1: data = 'Segunda-Feira';
        return data

      case 2: data = 'Terça-Feira';
        return data

      case 3: data = 'Quarta-Feira';
        return data

      case 4: data = 'Quinta-Feira';
        return data

      case 5: data = 'Sexta-Feira';
        return data

      case 6: data = 'Sabado';
        return data

      default: data = '';
        return data
    }
  } const dayWeekText = getDayWeekText(numDay);

  function getMonthNew(monthNew){

    switch(monthNew){

      case 0: data = 'Janeiro';
        return data

      case 1: data = 'Fevereiro';
        return data

      case 2: data = 'Março';
        return data

      case 3: data = 'Abril';
        return data

      case 4: data = 'Maio ';
        return data

      case 5: data = 'Junho ';
        return data

      case 6: data = 'Julho ';
        return data
        
      case 7: data = 'Agosto ';
        return data

      case 8: data = 'Setembro ';
        return data

      case 9: data = 'Outubro ';
        return data

      case 10: data = 'Novembro ';
        return data

      case 11: data = 'Dezembro';
        return data

      default: data = '';
        return data
    }
  } const monthNewText = getMonthNew(monthNew)
  
  
  
}Escop()