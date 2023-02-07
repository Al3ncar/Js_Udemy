function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = peso.value / Number(altura.value) * Number(altura.value); // resultado do imc 
    function imc2(){
      if(peso.value === "" || peso.value >= 596){
        result.innerHTML += `<li class=".msgErro">peso invalido ou altura invalido </li>`
      } else if(altura.value === "" || altura.value >= 2.52){
        result.innerHTML += `<li class=".msgErro">altura invalido ou peso invalido</li> `
      } else if(imc <= 18.5){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (abaixo do peso)</li>`
      } else if(imc <= 18.6 && imc >= 24,9){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (Peso normal)</li>`
      } else if(imc <= 25 && imc >= 29,9){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</li>`
      } else if(imc <= 30 && imc >= 34.4){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</li>`
      } else if(imc <= 35 && 39,9){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</li>`
      } else if(imc >= 40){
        result.innerHTML += `<li>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</li>`
      }
    }imc2()
  }
  form.addEventListener('submit', Escop)
}
myEscop()

