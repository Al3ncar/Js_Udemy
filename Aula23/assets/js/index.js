// textContent !== innerHTML

//Eẽ é uma propriedade do node, cujo renderiza a interface do conteudo, ou seja, mostra texto na tela, sendo bem semelhante ao InnerHtml, um exemplo de sintaxw:

let text = document.querySelector('.text');
text.textContent = `Olá, como você está??`;

//tela irá retornar um "Olá, como você está??""
//o textContent é mais performatico do que o innerHTML, tendo uma sintaaxe de construção bem semelhante ao do exemplo acima:

let text2 = document.querySelector('.text');
text2.innerHTML = `Olá, estou bem, e você?? como você está??`;

// createElement() adiciona é um metodo que cria elementos HTML, está relacionado com outro método, chamado de appendChild()
// No exemplo a seguir pode ver como funciona a criação de um elemento e como ele é coloca no HTML.


// ----   ----  //



//createElement()

//Criando elemento:
let p = document.createElement('p');

//Adicionando Texto no elemento:
p.textContent = 'Oláaaaaaaaaaaaaaa';

//Enviando ao HTML:
text.appendChild(p)

//podemos adicionar classes nos elementos que adicionamos, desta forma:
//sintaxe: 

const p2 = document.createElement('div');

//Agora iremos colocar uma classe na div

// 1° jeito: 
p2.classList = "div_list";

//2° jeito:
p2.classList.add(`div_list2`)

//Colocamos eles no HTML,  inserindo elementos filhos 
const conteiner = document.querySelector('.cont');
conteiner.appendChild(p2) 


//Outra maneira de fazer isso, inserindo antes 

const el = document.createElement('div');

el.classList = "div_el";

const el3 = document.querySelector('.cont .div_list');

console.log(el3)

conteiner.insertBefore(el, el3)