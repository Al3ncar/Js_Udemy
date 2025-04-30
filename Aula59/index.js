const numb = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numbNovo = [];

numb.forEach((item) => item >= 10 && numbNovo.splice(0, 0, item));
let numbNovo2 = numb.filter((item) => item >= 10);

// console.log(numbNovo);
// console.log(numbNovo2);  

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const fiveWord = pessoas.filter((item) => item.nome.length >= 5);
const fivetyYears = pessoas.filter((item) => item.idade >= 50);
const lastA = pessoas.filter((item) =>
  item.nome.toLocaleLowerCase.endsWith("a")
);

console.log("5 letras", fiveWord);
console.log("50 anos", fivetyYears);
console.log("Termina com a", lastA);
