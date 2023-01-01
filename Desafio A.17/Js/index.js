// IIFE ==> (Immediately Invoked Function Expression)
// Basicamente são funções que são criadas e alto invocadas

// O querySelector basicamente seleciona os ele[mentos com a class:
// usado como (" form / nome da class ");
// usado como (" .form / usado como css ")
// usado como (" #form / usado com id ")

function meuEscopo(){
    const form = document.querySelector("form");
    form.onsubmit = (e) => {e.preventDefault()}; 
    console.log("vai caralho")
    //sempre que tiver um recebe " = " devemos ter um ponto e virgula " ; " no final.
    //Prevent default previne o comportamento padrão da função.
}
meuEscopo()