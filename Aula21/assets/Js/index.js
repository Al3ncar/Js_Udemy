function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = peso.value / (altura.value * altura.value); // resultado do imc 
    function imc2(){
      if(peso.value === "" || peso.value >= 596){
        result.innerHTML = `<span>peso invalido ou altura invalido </span>`
      } else if(altura.value === "" || altura.value >= 2.52){
        result.innerHTML = `<span>altura invalido ou peso invalido</span> `
      } else if(imc <= 18.5){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (abaixo do peso)</p>`
      } else if(imc <= 18.6){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
      } else if(imc <= 25){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
      } else if(imc <= 30){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`
      } else if(imc <= 35){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`
      } else if(imc >= 40){
        result.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
      }
    }imc2()
  }
  form.addEventListener('submit', Escop)
}
myEscop()

/* 





*/