/* function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('.Pausar');
    const zerar = document.querySelector('.Zerar');

    let [ hours, second, minutes ] = [0, 0, 0];
    let buttn = false;
    const zeroAEsquerda = (num) => {return num >= 10 ? num : `0${num}`};
    
    // const time = () => {
    //     const timeSecond = setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000);
    //     const timeMinute = setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000);
    //     const timeHour = setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000);
    // }
    
    // const timeSecond =  () => setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000);
    // const timeMinute = () => setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000);
    // const timeHour = () => setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000);


    if(buttn === true){ setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000); }
    if(buttn !== false){ setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000) }
    if(buttn !== false){ setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000) }

    const returnTime = setInterval(() => {
        relogio.textContent = `${zeroAEsquerda(hours)} : ${ zeroAEsquerda(minutes) } : ${ zeroAEsquerda(second) }`
    }, 1000)
        
    const validado = () => { buttn = true }

    const stopTime = () => {
        setTimeout(() => { clearInterval( timeSecond )})
    }

    // iniciar.addEventListener('click', () => {timeSecond, timeMinute(), timeHour()})
    iniciar.addEventListener('click', () => {validado()})
    pausar.addEventListener('click', () => {stopTime()})

} Escop()



 */

function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('.Pausar');
    const zerar = document.querySelector('.Zerar');
    
    iniciar.addEventListener('click', relogio.textContent= "Ele começou")
    pausar.addEventListener('click', relogio.textContent= "Ele Parou")
    zerar.addEventListener('click', relogio.textContent= "Ele Zerou")
    
}Escop()