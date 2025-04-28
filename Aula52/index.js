const [n1, n2, n3] = [2, 6, 9];

((valA, valB, valC) => {
  console.log(valA + valB + valC);
})(n1, n2, n3);

const pessoa = {
  nome: "Pamela",
  sobrenome: "Silva",
  idade: 24,
};

for (let i in pessoa) {
  console.log(i); // nome, sobrenome, idade
  console.log(pessoa[i]); // Pamela, Silva, 24
  console.log(pessoa[`${i}`]); // Pamela, Silva, 24
}
