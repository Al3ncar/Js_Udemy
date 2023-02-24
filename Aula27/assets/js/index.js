function Escop(){
  const day = new Date();
  const numDay = day.getDay();
  const dayNew = day.getDate();
  const monthNew = day.getMonth();
  const yearNew = day.getFullYear();
  const hoursNew = day.getHours();
  const minutesNew = day.getMinutes();

  function zeroEsq(minutesNew){ return minutesNew >= 10 ? minutesNew : `0${minutesNew}`}

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
    let data2;
    switch(monthNew){

      case 0: data2 = 'Janeiro';
        return data2

      case 1: data2 = 'Fevereiro';
        return data2

      case 2: data2 = 'Março';
        return data2

      case 3: data2 = 'Abril';
        return data2

      case 4: data2 = 'Maio ';
        return data2

      case 5: data2 = 'Junho ';
        return data2

      case 6: data2 = 'Julho ';
        return data2
        
      case 7: data2 = 'Agosto ';
        return data2

      case 8: data2 = 'Setembro ';
        return data2

      case 9: data2 = 'Outubro ';
        return data2

      case 10: data2 = 'Novembro ';
        return data2

      case 11: data2 = 'Dezembro';
        return data2

      default: data2 = '';
        return data2
    }
  } const monthNewText = getMonthNew(monthNew)
  
  const horas = document.querySelector('.horas');
  const msg = horas.textContent = `${dayWeekText}, ${dayNew} de ${monthNewText} de ${yearNew} as ${hoursNew}:${zeroEsq(minutesNew)}`
  console.log(msg);
  
}Escop()