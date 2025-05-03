const numb = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
  { nome: "Luiz", idade: 64 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 47 },
];

const total = numb.reduce((ac, item) => (ac += item), 0);
console.log("total", total);

let idades = [];
let idades2;

const maisVelho = pessoas.reduce((ac, item) => {
  if (ac.idade >= item.idade) {
    idades2 = ac.idade;
  }

  if (idades2 === ac.idade) idades.push(ac);
  console.log(idades);

  return idades;
}); 
