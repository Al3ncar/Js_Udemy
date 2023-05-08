// Alguns operadores logicos correspondem a padroes matematicos
/* 
  ()
  * -> Multiplicação
  / -> Divisão | % -> Resto 
  + -  -> Mais e menos
*/

// += 
//Isso:

let N1 = 25
N1 = N1 + 25
console.log(N1) // 50

//É a mesma coisa disso:


let N2 = 25
N2+= 25 // N2 = N2 + 25
console.log(N1) // 50

//Tal expressão pode acontecer com diferentes operadores
//como:

let N3 = 10
N3 *= 10 
console.log(N3) // 100

//PODEMOS EXECUTAR ESSA AÇÃO VARIAS VEZES
 
let N4 = 2
N4 *= 2 // 4
N4 *= 2 // 8
N4 *= 2 // 16
N4 *= 2 // 32
N4 *= 2 // 64
console.log(N4)

//Os respectivos operadores são chamados operadores de atribuição
/* 
  **= -> Potenciação
  ++  -> Incremento 
  --  -> Decremento
*/

//   **=  -> Potenciação

let N5 = 3;
N5 **= 3;

console.log(N5); // 27

//   ++  -> Incremento 

let N6 = 10
N6 ++;

console.log(N6) // 11

//   --  -> Decremento

let N7 = 10;
N7 --;

console.log(N7); // 9

//Sempre que vermos NAN, significa NOT A NUMBER 

//PARSEINT() --> Metodo que converte o valor para inteiro
// Transforma string em Number


let Numb1 = "14.1515151551151"
console.log(parseInt(Numb1)) // 14



//PARSEFLOT() --> Converte a string em number
//Converte textos para numeros flutuantes 

let Numb2 = "23.55555"
console.log(parseFloat(Numb2)) // 23.55555

 
/* 
<-- METODO --> 
Quando uma propriedade armazena uma função
Método pode ser considerado como uma ação, 
uma função a ser executada em cima de algum parametro 
*/

/* 
<-- PARAMETRO -->
Parâmetro é o nome que se da para a variável 
que nós declaramos na definição de uma função. Pode tambem ser
considerada como um valor que já está fixa em um objeto 

*/

//Temos tambem um limitador de casa decimais chamado de 
//TOFIXED

let numb2 = 65.89999
console.log(numb2.toFixed(1)) // 65.9

