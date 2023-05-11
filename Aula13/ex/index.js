let number = Number(prompt(`Olá, digite um numero `))

//let number = prompt(`Olá digite umm numero `);
// number = Number(number)

const element = document.getElementById("result-prompt");
const text = document.getElementById("texto");

element.innerHTML = number;
text.innerHTML += `Seu numero +2 é ${number + 2} <br />`
text.innerHTML += `Raiz quadrada ${number ** 0.5} <br />`;
text.innerHTML += `${number} é inteiro: ${Number.isInteger(number)} <br />`;
text.innerHTML += `É NaN: ${Number.isNaN(number)} <br />`;
text.innerHTML += `Arredondado para Baixo: ${Math.floor(number)} <br />`;
text.innerHTML += `Arredondado para Cima: ${Math.ceil(number)} <br />`;
text.innerHTML += `Com duas casas decimais: ${number.toFixed(2)} <br />`;

