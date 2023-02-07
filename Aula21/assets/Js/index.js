function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = Number(peso.value / (altura.value * altura.value))
    
    function pesoCalc(){
      if(peso.value === undefined || null || "" && peso.value >= 596){
        result.innerHTML += `<p>Peso invalido</p>`
      }
    }
    function alturaCalc(){
      if(altura === undefined || null || "" && altura >= 2.51){
        result.innerHTML += `<p>Altura invalida<p>`
      }
    }alturaCalc()
    function imc2(){
    if(imc <= 18.5 ){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (abaixo do peso)</p>`
    } else if(imc <= 18.6 && imc >= 24,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    } else if(imc <= 25 && imc >= 29,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
    } else if(imc <= 30 && imc >= 34.4){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`
    } else if(imc <= 35 && 39,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`
    } else if(imc >= 40){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
    }}
    pesoCalc(), alturaCalc(), imc2()
  }
  form.addEventListener('submit', Escop)
}
myEscop()



/* function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = peso.value / (altura.value * altura.value).toFixed(2) 
    
     result.innerHTML += `Seu IMC é ${imc.toFixed(2)}` 

    if(imc <= 18.5 ){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (abaixo do peso)</p>`
    } else if(imc <= 18.6 && imc >= 24,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    } else if(imc <= 25 && imc >= 29,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
    } else if(imc <= 30 && imc >= 34.4){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`
    } else if(imc <= 35 && 39,9){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`
    } else if(imc >= 40){
      result.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
    }
  }
  form.addEventListener('submit', Escop)
}
myEscop() */