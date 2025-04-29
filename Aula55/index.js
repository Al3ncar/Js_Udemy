function Pessoas(nome, sobrenome) {
  // Atributo e Métodos Privados
  const id = 1;
  const metodo2 = () => console.log("sera que eu renderizo?? " + id);

  // Atributo e Métodos Publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoas("Amanda", "Ribeiro");
const p2 = new Pessoas("Jorge", "Sousa");

console.log(p1.nome);
console.log(p2.nome);

console.log(' ') // Espaço console

p1.metodo();
p2.metodo();

// p1.metodo2(); // Erro no console
// p2.metodo2(); // Erro no console
