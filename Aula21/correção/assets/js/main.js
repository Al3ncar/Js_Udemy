// Capturar evento de submit do formulário
const form = document.querySelector('#formulario'); // Pegando a form

form.addEventListener('submit', function (e) { // adicionando evento
  e.preventDefault(); // previnindo comportamento padrão
  const inputPeso = e.target.querySelector('#peso'); //Pegando input com id peso
  const inputAltura = e.target.querySelector('#altura'); //Pegando input com id altura

  const peso = Number(inputPeso.value);  // transformando o tipo de valor de  cada input em numero
  const altura = Number(inputAltura.value); // transformando o tipo de valor de cada input em numero

  // sistema de condição para ver se ambos inputs preenchei as requisições necessarias
  if (!peso) { 
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura); // função especifica  para calcular o imc 
  const nivelImc = getNivelImc(imc); // função especifica para calcular o nivel do imc

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // mensagem que será renderizada na tela

  setResultado(msg, true); // estamos passando métodos para essa propriedade
});

function getNivelImc (imc) { // função referente a o nivel do IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Array responsavel pelos os niveis

  // condiços que retornam o nivel do IMC
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) { // função referente ao calcular o IMC 
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () { // creando uma elemento no html 
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) { // função responsavel por alterar o resultado 
  const resultado = document.querySelector('#resultado'); // pegando um elemento do documento 
  resultado.innerHTML = '';

  const p = criaP(); // guardando a função criaP

  if (isValid) { // verificando se a mensagem é verdadeira ou falsa
    p.classList.add('paragrafo-resultado'); // se for verdadeira executa isso
  } else {
    p.classList.add('bad'); // se não for executa isso
  }

  p.innerHTML = msg; // colocando a mensagem no inner
  resultado.appendChild(p); // enviando a mensagem pro html
}
