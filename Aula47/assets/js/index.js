function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    let hours = 00
    let second = 00
    let minutes = 00

    let time = () => {
        function zeroAEsquerda(num){return num >= 10 ? num : `0${num}`};

        setInterval(()=> {
            second < 59 ?  second++ : second = 00;
            relogio.textContent = `${zeroAEsquerda(hours)} : ${ zeroAEsquerda(minutes) } : ${ zeroAEsquerda(second) }`
        },1000)

        setInterval(()=>{
            minutes < 59 ?  minutes++ : minutes = 00
        },60000)

        setInterval(()=>{
            hours < 59 ?  hours++ : hours = 00
        },3600000)
    }

    

    iniciar.addEventListener('click', () => {time()})

} Escop()