function relogio() {

    function criaHoraDosSegundos(segundos) {   // função responsavel por retornar o Tempo 
      const data = new Date(segundos * 1000);  // Pegando a hora do inicio da era onix 
      return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });  // retornando o tempo com parametros 
    }
  
    const relogio = document.querySelector('.relogio');   // Pegando a tag P no documento 
    let segundos = 0;   // Variavel responsavel pelo tempo
    let timer;  // Guardando o setInterval()
  
    function iniciaRelogio() {  // Função responsavel por iniciar o relogio

      timer = setInterval(function() {  // SetInterval responsavel por rolar o tempo

        segundos++;   // somando a let segundos 
        relogio.innerHTML = criaHoraDosSegundos(segundos);  // mostrando a pagina o tempo executado

      }, 1000);

    }
  
    document.addEventListener('click', function(e) { // Evento adicionado de click 
      const el = e.target; // pegado o alvo do evento
  
      if (el.classList.contains('zerar')) { // se 
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
      }
  
      if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
      }
  
      if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
      }
    });
  }
  relogio();