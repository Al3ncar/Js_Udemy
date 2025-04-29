const nomes = ["Eduardo", "Maria", "Joana"];
nomes[2] = "João";
delete nomes[2];

console.log(nomes.length);

const nomes2 = ["Eduardo", "Maria", "Joana", "Flavia", "Rosana"];
const novo2 = [...nomes2];

novo2.pop();
console.log(novo2);
console.log(nomes2);

const name = "Igor Bastos Alencar";
console.log(name.split(" "));
