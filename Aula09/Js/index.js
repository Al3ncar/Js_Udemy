/* 
  No navegador temos um elemento central chamado de window, 
  onde ele tem em si, diversos elementos e valores que são mostrados
  na minha janela 
*/

// Os 3 principais métodos do window são:
// - alert(``) // resposta --> OK
// - comfirm(``) // resposta --> OK or CANCELAR / boleano 
// - prompt(``) // resposta --> DIGITE / Input

/* 
  window.alert() mais conhecido em javaScript como "alert()"
  ele é uma caixa de mensagem que o navegador renderiza como pop-up
*/

 /* const Msg = alert("Exemplo de Alert")   */


/* const Confirma = confirm("Deseja ver como funciona o comfirm??")
console.log(Confirma) // true || false */

// cancelar = false || // ok = true
// O valor de cada let 

// Desafio da Aula 9

//Deve criar um joguinho com o usuario usando um prompt
//onde os dois possiveis valores numerico seram somados
//e depois renderizados com um alert

let Num1 = prompt("Digite um numero")
let Num2 = prompt("Digite um numero")

Num1 = Number(Num1)
Num2 = Number(Num2)

console.log(typeof Num1)
console.log(typeof Num2)

console.log(typeof Num1, typeof Num2)
console.log(Num1 + Num2) // Resulta)

// - Podemos isso de 2 possiveis maneiras - //
//1° Maneira
const Result = Num1 + Num2
alert(`O resultado da sua conta é ${Result}`)

//2° Maneira
const Result2 = `O resultado da sua conta é ` + (Num1 + Num2)
alert(Result2)

//Meneira feita em aula
alert(`O resultado da sua conta é ${Num1 + Num2}`)
//Eu posso colocar expressoẽs dentro de uma Tamplete String



// exemplo;

window.alert('Olá, eu sou alert completo');

alert('Olá, eu sou alert simples');
