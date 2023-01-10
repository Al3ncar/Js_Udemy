// IIFE ==> (Immediately Invoked Function Expression)
// Basicamente são funções que são criadas e alto invocadas

// O querySelector basicamente seleciona os ele[mentos com a class:
// usado como (" form / nome da class ");
// usado como (" .form / usado como css ")
// usado como (" #form / usado com id ")

function meuEscopo(){
    const form = document.querySelector("form");

    //sempre que tiver um recebe " = " devemos ter um ponto e virgula " ; " no final.
    //Prevent default previne o comportamento padrão da função.


    form.onsubmit = function (e) {e.preventDefault()};

    // O método addEventListener() do JavaScript permite configurar funções a serem chamadas quando um evento especificado ocorre, como quando um usuário clica em um botão

    function EventFunc (e) {webkitURL.preventDefault()}
    form.addEventListener(`submit`, EventFunc )
}
meuEscopo() 