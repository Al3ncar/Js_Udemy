
/* 
    // setInterval()

    O setInterval() método, oferecido nas interfaces Window e Worker, chama repetidamente uma função ou executa um trecho de código, com um atraso de tempo fixo entre cada chamada.

*/

// sintaxe:


function mostraHora() {
    let date = new Date();

    return date.toLocaleDateString("pt-BR",{
        hour12: false
    });
}

// setInterval vai configurar um intervalo de tempo, para que alguma função seja executada em determinado Momento 
setInterval(mostraHora(), 1000)

console.log(mostraHora())