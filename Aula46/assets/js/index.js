
/* 
    // setInterval()

    O setInterval() método, oferecido nas interfaces Window e Worker, chama repetidamente uma função ou executa um trecho de código, com um atraso de tempo fixo entre cada chamada.

*/

// sintaxe:

// setInterval( o que ira acontecer, tempo que vai acontecer )


function mostraHora() {
    let date = new Date();
    return date.toLocaleTimeString("pt-BR",{ hour12: false });
}

function funcaDoIntervalo(){ console.log(mostraHora());}

// setInterval vai configurar um intervalo de tempo, para que alguma função seja executada em determinado Momento 
//Podemos colocar funções dentro do proprio setInterval 

    setInterval(() => {  console.log( mostraHora() )  }, 1000); 

// Direfença entre chamar a funhção e a referência dela 

    // setInterval(funcaDoIntervalo, 1000); // Passando a referência
    // setInterval(funcaDoIntervalo(), 1000); // Chamando a função

//