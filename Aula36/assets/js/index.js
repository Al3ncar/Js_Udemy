//QuerySelectorAll 
//Enquanto o querySelector seleciona apenas um elemento o ALL seleciona todos:
const contPargs = document.querySelector('.paragrafos') // Exemplo do queryselector()


//O querySelectorAll() seleciona uma coleção de dados;
const pargs = document.querySelectorAll('p')


//Para podermos pegar os estiilo do body vamos usar o:
const styleBody = getComputedStyle(document.body) // Pegando o estilo que está computado no BODY
const backgroundColorBody = styleBody.backgroundColor