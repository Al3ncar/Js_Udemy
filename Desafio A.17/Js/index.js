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

    function EventFunc (e) {e.preventDefault()}
    function EventFunc2 (e) {
        e.preventDefault()
        const nome = form.querySelector('.name');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        console.log(nome.value, sobrenome.value, altura.value, peso.value)
    }

    form.addEventListener(`submit`, EventFunc2 )

}
meuEscopo() 