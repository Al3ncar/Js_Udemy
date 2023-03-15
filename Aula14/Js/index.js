//Array são coleção de coisas, dentro do array podemos colocar qualquer tipo de dado. Arrays são indexdos por elementos
//NÃO É BOA PRATICA FICAR MISTURANDO TIPOS DE DADOS DENTRO DE UM ARRAY.

//INDICE DO ARRAY: 0  ,    1   ,   2
const alunos = [`Luiz`, `Maria`, `João`];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
 


//Posso adicionar outra elemento de maneira facil
//Para fazer isso preciso saber o tamanho do meu array, logo:
console.log(alunos.length) // 2

//Desta maneira será adicionado "Rodolfo" no 3 indice
alunos[3] = "Rodolfo";
console.log(alunos); //const alunos = ['Luiz','Maria','João','Rodolfo']

//Outra maneira de adicionar elementos dentro de um array
//Desta forma basicamente estamos pegando o valor do tamanho do array e adicionando mais um elemento.

alunos[alunos.length] = "Fabiana"
alunos[alunos.length] = "Rebecca"
alunos[alunos.length] = "Lucas"
console.log(alunos)



// MANEIRA MAIS ACESSIVEL DE ADICIONAR NO FIN é usando o push(), o push adiciona coisas no final do Array, exemplo:

// PUSH()

const alunos2 = [`Renan`, `Carol`, `Hetor`];
console.log(alunos2);

alunos2.push("Jaiane"); // Adiciona no FIN
alunos2.push("Thalita"); // Adiciona no FIN
alunos2.push("Kauan"); // Adiciona no FIN

console.log(alunos2); //  [ESSES ELEMENTOS ESTÃO NO FINAL]   
//['Renan','Carol','Hetor','Jaiane','Thalita','Kauan']



// MANEIRA MAIS ACESSIVEL DE ADICIONAR NO COMEÇO é usar o unshift(), o unshift adiciona coisas no começo do Array, exemplo:

const alunos3 = [`Ayla`, `Helena`, `Gabriel`];
console.log(alunos3);

alunos3.unshift("Manuel") // Adiciona no COMEÇO
alunos3.unshift("Laura") // Adiciona no COMEÇO
alunos3.unshift("Antony") // Adiciona no COMEÇO

//                   [ESSES ELEMENTOS ESTÃO NO COMEÇO]   
console.log(alunos3)//[ 'Antony', 'Laura', 'Manuel', 'Ayla', 'Helena', 'Gabriel' ]



//MANEIRA MAIS ACESSIVEL DE EXCLUIR O ULTIMO ELEMENTO do array, desta maneira podemos apagar o ultimo elemento que está no meu array, exemplo: 

const alunos4 = [`Geovanna`, `Melisa`, `Matias`];
console.log(alunos4);

alunos4.pop(); //Será excluido no FIN
console.log(alunos4); // [ 'Geovanna', 'Melisa' ]

//TAMBEM conseguimos guardar o que foi excluido, exemplo:

const remove = alunos4.pop()
console.log(alunos4) // [ 'Geovanna' ]
console.log(remove) // Melisa 



//MANEIRA MAIS ACESSIVEL DE EXCLUIR O PRIMEIRO ELEMENTO do array, desta maneira podemos apagar o primeiro elemento que está no meu array, exemplo: 

const alunos5 = [`João`, `Maria`, `Vanessa`];
alunos5.shift() // Sera exxcluido o primeiro elemento do Array
 
console.log(alunos5); // [`Maria`, `Vanessa`]



//Podemos DELETAR os Arrays usando seu indice, exemplo:

const alunos6 = [`Amanda` , `Jeferson` , `Beatriz`]
delete alunos6[1] // [`Amanda`, <Vazio> , `Beatriz`]

//desta forma o elemento do indice 1 irá estar vazio. 


//Podemos usar slice para poder renderizar o tamanho do array, exemplo:
const alunos7 = [`Murilo`, `João`, `Jonathan`]

alunos7.push("Godolfredo")
alunos7.push("Cleidison")
alunos7.push("Gispodol")
console.log(alunos7)

console.log(alunos7.slice(0, 3))

// Caso eu use fatores negativos ele irá somar a quantidade de elementos do array - o valor escolhido

console.log(alunos7.slice(0, -1))
// 6 Elementos - 1 = 5 elemnetos 



// Quando usamos typeof num Array ele renderiza Object
// Porem aqui eu posso perguntar se alunos é uma instancia de Array
// O instanceof é um operador testa para ver se a prototypepropriedade de um construtor aparece em qualquer lugar na cadeia de protótipo de um objeto. O valor de retorno é um valor booleano. Seu comportamento pode ser personalizado com Symbol.hasInstance.

console.log(alunos7 instanceof Array) // true
