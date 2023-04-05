function Escop(){

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.Iniciar');
    const pausar = document.querySelector('Pausar');
    const zerar = document.querySelector('Zerar');

    let hours = 00
    let second = 00
    let minutes = 00



    iniciar.addEventListener('click', () => {
        setInterval(() => {
            relogio.textContent = `${hours} : ${minutes} : ${second}`

        },1000)

        setInterval(()=> {
            second < 59 ?  second++ : second = 00
        },1000)

        let timeMinute = setInterval(()=>{
            if(minutes < 59) return minutes++ 
        },60000)

        let timeHours = setInterval(()=>{
            if(hours < 59) return hours++ 
        },3600000)


    })

} Escop()