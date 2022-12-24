// Desafio da aula 13

let res = prompt(`Digite um numero??`);
res = Number(res);

let raiz = res ** 0.5;
let int = Number.isInteger(res);
let nan = Number.isNaN(res);
let down = Math.min(res)
let up = Math.max(res)

document.body.innerHTML = `<strong>Seu número é ${res}<strong/>`;
document.body.innerHTML += `Raiz quadrada ${raiz}`;
document.body.innerHTML += `${res} é inteiro: ${int}`;
document.body.innerHTML += `É NaN: ${nan}`;
document.body.innerHTML += `Arredondado para Baixo: ${down}`;
document.body.innerHTML += `Arredondado para Cima: ${up}`;


console.log(res)