function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    let hours = 00
    let second = 00
    let minutes = 00

    console.log(time)
    for(let t = 0; t < 60; t++){
        
    }

/*     const timeme = setInterval(()=> {
        second =+ 1;
        if(second > 60){
            minutes =+ 1;
            second = 00;
        }

    }, 1000) */
    
    iniciar.addEventListener('click', () => {
        relogio.textContent = `${timeme}`
    })

} Escop()