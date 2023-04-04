function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    const time = 0
    

    setInterval({ 
        
    },1000)
    

    iniciar.addEventListener('click', () => {
        relogio.textContent = `${date()}`
    })

} Escop()