// textContent

//Eẽ é uma propriedade do node, cujo renderiza a interface do conteudo, ou seja, mostra texto na tela, sendo bem semelhante ao InnerHtml, um exemplo de sintaxw:

let text = document.querySelector('.text')
text.textContent = `Olá, como você está??`

//tela irá retornar um "Olá, como você está??""
//o textContent é mais performatico do que o innerHTML, tendo uma sintaaxe de construção bem semelhante ao do exemplo acima:

let text2 = document.querySelector('.text')
text2.innerHTML = `Olá, estou bem, e você?? como você está??`
