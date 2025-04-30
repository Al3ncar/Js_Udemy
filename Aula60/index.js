const numb = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numbNovo = numb.map((item) => item * 2);
console.log(numbNovo);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const names = pessoas.map((item) => item.nome);
console.log(names);

const fullarray = pessoas.map((item) => ({ idade: item.idade }));
console.log(fullarray);

// const idValue = pessoas.map((item, index) => ({ ...item, id: index }));
const idValue = pessoas.map((item, index) => {
  const items = { ...item };
  return (items.id = (index + 1) * 100);
});
const idValue2 = pessoas.map((item, index) => ({
  ...item,
  id: (index + 1) * 100,
}));
console.log(idValue);
console.log(idValue2);

console.log(pessoas);
