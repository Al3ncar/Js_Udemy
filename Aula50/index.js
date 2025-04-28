// As funções definidas com a palavra function tem uma variavel especial
// chamada de arguments responsavel por pegar todos os parametros presentes
// na função declarada

const funcao = () => {
  console.log(arguments);
};
// funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9); // Erro no console

function funcao2() {
  console.log(arguments);
}

funcao2("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(" "); // espaço no console

function funcao3() {
  let total = 0;
  for (let args of arguments) {
    total += args;
  }

  console.log(total);
}

funcao3(1, 2, 3, 4, 5, 6, 7); // 28

console.log(" "); // espaço no console

function funcao4(a, b = 3, c = 4) {
  console.log(a + b + c);
}

funcao4(2); // 9
funcao4(3, 4); //11
funcao4(3, 4, 6); //13

console.log(" "); // espaço no console

const funcao5 = (a = 0, b = 3, c = 4) => {
  console.log(a + b + c);
};

// Em alguns casos se precisarmos de um valor padrão presente na propria
// Podemos chamar da seguinte maneira, porem tal método não é muito recomendado

funcao5(3, undefined, 6); // 12

// caso outro valor seja passado diferente de undifened ou e false, ira dar NaN ou ira concatenar
funcao5("", 4, 5); // 45
funcao5(4, true, 5); // 10

funcao5(2); // 9
funcao5(3, 4); //11
funcao5(3, 4, 6); //13

// Antes para definir uma valor padrão teria que usar o |, exemplo:

 