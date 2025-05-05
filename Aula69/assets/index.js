const pessoas = [
  { id: 3, name: "Helena" },
  { id: 2, name: "Maria" },
  { id: 1, name: "Luiz" },
];

const newPessoas = new Map();
for (const { id, name } of pessoas) {
  newPessoas.set(id, { id, name });
}

console.log(newPessoas);
