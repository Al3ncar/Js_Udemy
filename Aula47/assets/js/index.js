function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    let hours = 00
    let second = 00
    let minutes = 00


    let timer = setInterval(() => {
        iniciar.addEventListener('click', () => {

            // console.log(hours = hours + 1 )
        })
    
    },1000)
    
    iniciar.addEventListener('click', () => {
        relogio.textContent = `${timer}`
    })

} Escop()