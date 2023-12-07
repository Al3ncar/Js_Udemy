/* 
  No navegador temos um elemento central chamado de "window", 
  onde ele tem diversos elementos e valores que são mostrados
  na minha janela, podendo ser manipulados no desenvolvimento
*/

//  Os 3 principais métodos do window são:
// - alert(``) // resposta --> OK
// - comfirm(``) // resposta --> OK or CANCELAR / boleano
// - prompt(``) // resposta --> DIGITE / Input

// ---------------- Alert() ----------------- //

// window.alert() mais conhecido em javaScript como "alert()"
// ele é uma caixa de mensagem que o navegador renderiza como pop-up
const Msg = alert("Eai, sou o alert!");

// ---------------- Prompt() ----------------- //

// window.prompt() mais conhecido em javaScript como "prompt()"
// ele é uma caixa de mensagem que o navegador renderiza como pop-up
// sendo interativa, onde o usuario pode digitar valores do tipo string,
// dentro do input fornecido

const MsgTextAreat = prompt("Eu sou o Prompt, que é você?");
console.log(MsgTextAreat); // valor retornado

// ---------------- Confirm() ----------------- //

// window.confirm() mais conhecido em javaScript como "confirm()"
// ele é uma caixa de mensagem que o navegador renderiza como pop-up
// sendo interativa, onde é fornecido para o usuario 2 botões
// "cancelar" e "ok"

const MsgConfirma = confirm("Eu sou o confirm, quer me conhecer?");
console.log(MsgConfirma); // cancelar = false || ok = true

// ----------- Retornando valores ----------- //

// # confirm
const confirma = confirm("Deseja ver como funciona o comfirm?");
console.log(confirma); // cancelar = false || ok = true

// # alert
const alertando = alert("olá, mundo!");
console.log(alertando);

// # prompt
const areaTexto = confirm("olá, deseja apagar?");
console.log(areaTexto); // valor passado dentro do input da prompt

// ----------- Desafio da Aula 9 ----------- //

// Deve criar um joguinho com o usuario usando um prompt
// onde os dois possiveis valores numerico seram somados
// e depois renderizados com um alert

let Num1 = prompt("Digite um numero");
let Num2 = prompt("Digite um numero");

Num1 = Number(Num1);
Num2 = Number(Num2);

console.log(typeof Num1);
console.log(typeof Num2);

console.log(typeof Num1, typeof Num2);
console.log(Num1 + Num2); // Resulta

// ------------ Meniras Possiveis ------------ //

//1° Maneira
const Result = Num1 + Num2;
alert(`O resultado da sua conta é ${Result}`);

//2° Maneira
const Result2 = `O resultado da sua conta é ` + (Num1 + Num2);
alert(Result2);

//Meneira feita em aula

alert(`O resultado da sua cont é ${Num1 + Num2}`);
//Eu posso colocar expressoẽs dentro de uma Tamplete String
