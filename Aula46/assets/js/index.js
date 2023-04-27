/* function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('.Pausar');
    const zerar = document.querySelector('.Zerar');

    let [ hours, second, minutes ] = [0, 0, 0];
    let timeM; let timeH; let timeS;
    
    const zeroAEsquerda = (num) => {return num >= 10 ? num : `0${num}`};

    const times = () => {
        clearInterval( timeS )
        clearInterval( timeM )
        clearInterval( timeH ) 

        timeS = setInterval(()=> { second < 59 ?  second++ : second = 00; }, 1000);
        timeM = setInterval(()=>{ minutes < 59 ?  minutes++ : minutes = 00 }, 60000);
        timeH = setInterval(()=>{ hours < 59 ?  hours++ : hours = 00 }, 3600000);

        relogio.style.color = 'black';
    }

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

    iniciar.addEventListener('click', () => {times()})
    pausar.addEventListener('click', () => {stopTime()})
    zerar.addEventListener('click', () => { zerTime() })

} Escop()

 */


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


/* function relogio(){
    function criaTempo(s){
        const data = new Date(s * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC' })       
    }

    const getRelogio = document.querySelector('.relogio');
    let s = 0;
    let timer;

    function ativarTemp (){
        timer = setInterval(()=>{
            s++;  getRelogio.innerHTML = criaTempo(s);
        },1000)
    }

    document.addEventListener('click', function(e){
        let el = e.target

        if(el.classList.contains('zerar')){}
    })

}relogio() */


/* function Relogio(){

    const relogio = document.querySelector('.relogio');

    function getTimer(second){
        const date = new Date(second * 1000)
        return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC'})
    }

        let second = 0;
        let timer;

    function Relog(){
        timer = setInterval(()=>{
            relogio.textContent = getTimer(second++ )
        }, 1000)
    }

    document.addEventListener('click', (event) => {
        const elemts = event.target
        const classl = elemts.classList;

        if(classl.contains('Iniciar')){
            clearInterval(timer), Relog();
            relogio.classList.remove('pausado')
        }
        if(classl.contains('Pausar')){
            clearInterval(timer); 
            relogio.classList.add('pausado')
        }
        if(classl.contains('Zerar')){
            second = 0, relogio.textContent = `00:00:00`;
            relogio.classList.remove('pausado')
        }
    })

} Relogio() */


