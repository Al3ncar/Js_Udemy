class Pessoas {
  constructor(nome, sobrenome, id) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.id = Symbol();
  }
}

const listPeople = [
  new Pessoas("Marcia", "Arraujo"),
  new Pessoas("Claudia", "Porteli"),
  new Pessoas("Amanda", "Suares"),
  new Pessoas("Mirela", "Fernandez"),
  new Pessoas("Gabriela", "Jantrez"),
];

listPeople.map((item, index) => {
  item.id === listPeople[index].id &&
    console.log(item.nome + " " + item.sobrenome);
});
