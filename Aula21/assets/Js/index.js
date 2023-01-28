function myEscop (){
  const form = document.querySelector('form');
  const result = document.querySelector('.result');

  function Escop(e){
    e.preventDefault()

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    const imc = peso.value

    
    result.innerHTML += `${peso.value} ${altura.value}`
    
  }
  form.addEventListener('submit', Escop)

}
myEscop()