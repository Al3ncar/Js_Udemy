function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('.Pausar');
    const zerar = document.querySelector('.Zerar');

    let [ hours, second, minutes ] = [0, 0, 0];
    let timeM; let timeH; let timeS;
    
    const zeroAEsquerda = (num) => {return num >= 10 ? num : `0${num}`};
    const timeSecond =  () => {timeS = setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000);}
    const timeMinute = () => {timeM = setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000);}
    const timeHour = () => {timeH = setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000);}

    setInterval(() => { relogio.textContent = `${zeroAEsquerda(hours)} : ${ zeroAEsquerda(minutes) } : ${ zeroAEsquerda(second) }`
    }, 1000)
        
    const stopTime = () => {
        setTimeout(() => { clearInterval( timeS )}, 100);
        setTimeout(() => { clearInterval( timeM )}, 100);
        setTimeout(() => { clearInterval( timeH )}, 100);

        relogio.style.color = 'red';
    }

    const zerTime = () => {
        [ hours, second, minutes ] = [0, 0, 0];
        relogio.textContent = `${zeroAEsquerda(hours)} : ${ zeroAEsquerda(minutes) } : ${ zeroAEsquerda(second) }`

        relogio.style.color = 'black';
    }

    iniciar.addEventListener('click', () => {timeSecond(), timeMinute(), timeHour(), relogio.style.color = 'black';})
    pausar.addEventListener('click', () => {stopTime()})
    zerar.addEventListener('click', () => { zerTime() })

} Escop()




/* 
function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('.Pausar');
    const zerar = document.querySelector('.Zerar');

    let conj = false 
    let circ = () => { conj = true, console.log(conj)}

    let timeSec = 0;

     let time = 
    
    iniciar.addEventListener('click', () => { 
        setInterval(()=>{  
            if(timeSec < 60) return relogio.textContent = `${timeSec++}`  
        }, 1000);
    })

    pausar.addEventListener('click', () => {relogio.innerHTML= "Ele Parou"})
    zerar.addEventListener('click', () => {relogio.innerHTML= "Ele Zerou"})

}Escop() */