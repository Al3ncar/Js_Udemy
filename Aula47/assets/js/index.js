function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    let [ hours, second, minutes ] = [0, 0, 0];

    const zeroAEsquerda = (num) => {return num >= 10 ? num : `0${num}`};
    const time = () => {
        setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000)
        setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000)
        setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000)
    }

    let returnTime = setInterval(() => {
        relogio.textContent = `${zeroAEsquerda(hours)} : ${ zeroAEsquerda(minutes) } : ${ zeroAEsquerda(second) }`
    }, 1000)
        

    const stopTime = () => {
        
    }

    iniciar.addEventListener('click', () => {time()})

} Escop()