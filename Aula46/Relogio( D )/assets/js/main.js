/* function relogio() {

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
      let classes = relogio.classList;

      if (el.classList.contains('zerar')) { // se 
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        classes.remove('pausado');
        segundos = 0;
      }
  
      if (el.classList.contains('iniciar')) {
        classes.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
      }
  
      if (el.classList.contains('pausar')) {
        clearInterval(timer);
        classes.add('pausado');
      }
    });
  } relogio();
 */

// ----------------  Maneira Simples ---------------------- //


  function criaHoraDosSegundos(segundos) {  
    const data = new Date(segundos * 1000);  
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' }); 
  }

  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciaRelogio() { 
    timer = setInterval(function() {  
      segundos++;   
      relogio.innerHTML = criaHoraDosSegundos(segundos);  
    }, 1000);
  }

  iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
  });

  pausar.addEventListener('click', function(event) {
    clearInterval(timer);
  });

  zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    segundos = 0; relogio.innerHTML = '00:00:00'
  });