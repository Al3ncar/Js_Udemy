function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const inputPeso = form.querySelector('.peso');
    const inputAltura = form.querySelector('.altura');
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    const imc = peso / (altura * altura); // resultado do imc 
    console.log(peso, altura)
    function imc2(){
      // Usando Ternario
      !peso || peso >= 596 || peso <= 2.1 ? result.innerHTML = `<span>peso invalido</span>`: 
      !altura || altura >= 2.52 || altura <= 0.67 ? result.innerHTML = `<span>altura invalida</span> `:
      imc <= 18.5 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (abaixo do peso)</p>`:
      imc >= 18.6 && imc <= 24.9 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`:
      imc >= 25 && imc <= 29.9 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`:
      imc >= 30 && imc <= 34.9 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`:
      imc >= 35 && imc <= 39.9 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`:
      imc >= 40 ? result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>` : null;

    }imc2()
  }
  form.addEventListener('submit', Escop)
} myEscop()