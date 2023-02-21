function Escop(){
  const data = document.querySelector('.data')
  
  const day = new Date()
  const numDay = day.getDay()

  function getDayWeekText(numDay){
    switch(numDay){

      case 0: data.textContent = 'Domingo';
        return data

      case 1: data.textContent = 'Segunda-Feira';
        return data

      case 2: data.textContent = 'Terça-Feira';
        return data

      case 3: data.textContent = 'Quarta-Feira';
        return data

      case 4: data.textContent = 'Quinta-Feira';
        return data

      case 5: data.textContent = 'Sexta-Feira';
        return data

      case 6: data.textContent = 'Sabado';
        return data

      default: data.textContent = '';
        return data
    }
  }
  const dayWeekText = getDayWeekText(numDay);
 
}Escop()