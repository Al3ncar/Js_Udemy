
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

    let timer = setInterval(() => {  console.log( mostraHora() )  }, 1000); 

// Direfença entre chamar a funhção e a referência dela 

    // setInterval(funcaDoIntervalo, 1000); // Passando a referência
    // setInterval(funcaDoIntervalo(), 1000); // Chamando a função

//


//setTimeout()

    // O método global setTimeout()define um cronômetro que executa uma função ou trecho de código especificado assim que o cronômetro expira.

//

// sintaxe:

//setTimeout( função a ser executada, executa até um determinado tempo  )


    setTimeout( () => { console.log("Olá Munnnddooo!!!") }, 10000)
    // Deste modo, o "Olá Munnnddooo!!!" só será executado 1 vez, daqui 10 segundos.

//

// existe uma maneira de para o intevalo, sendo ela ClearInterval():

setTimeout(() => { clearInterval(timer) }, 10000)